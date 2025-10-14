"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {
      if (!products || !Array.isArray(products) || products.length === 0) {
        ctx.response.status = 400;
        return {
          error: { message: "Products array is required and cannot be empty" },
        };
      }

      if (!userName || !email) {
        ctx.response.status = 400;
        return { error: { message: "User name and email are required" } };
      }

      const lineItems = await Promise.all(
        products.map(async (product) => {
          try {
            const item = await strapi
              .service("api::item.item")
              .findOne(product.id);

            if (!item) {
              throw new Error(`Item with id ${product.id} not found`);
            }

            return {
              price_data: {
                currency: "eur",
                product_data: {
                  name: item.name,
                },
                unit_amount: Math.round(item.price * 100),
              },
              quantity: product.count || 1,
            };
          } catch (error) {
            console.error(`Error processing product ${product.id}:`, error);
            throw new Error(`Invalid product: ${product.id}`);
          }
        })
      );

      const validLineItems = lineItems.filter((item) => item !== null);

      if (validLineItems.length === 0) {
        ctx.response.status = 400;
        return { error: { message: "No valid products found" } };
      }

      const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: `${clientUrl}/checkout/success`,
        cancel_url: clientUrl,
        line_items: validLineItems,
        metadata: {
          userName: userName,
          productCount: products.length,
        },
      });

      await strapi.service("api::order.order").create({
        data: {
          userName,
          email,
          products,
          stripeSessionId: session.id,
          totalAmount:
            validLineItems.reduce(
              (total, item) =>
                total + item.price_data.unit_amount * item.quantity,
              0
            ) / 100,
        },
      });

      return { id: session.id };
    } catch (error) {
      console.error("Order creation error:", error);

      if (error.type === "StripeInvalidRequestError") {
        ctx.response.status = 400;
        return {
          error: { message: "Invalid Stripe request: " + error.message },
        };
      }

      ctx.response.status = 500;
      return {
        error: {
          message: "There was a problem creating the order",
          details:
            process.env.NODE_ENV === "development" ? error.message : undefined,
        },
      };
    }
  },
}));
