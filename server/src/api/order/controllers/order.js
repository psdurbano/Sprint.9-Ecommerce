"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

// Simple shipping config mirroring the frontend
const SHIPPING_RATES = {
  spain: { label: "Spain", amount: 7.5 },
  europe: { label: "Europe", amount: 15 },
  row: { label: "Rest of World", amount: 24 },
};

const EUROPE_COUNTRIES = [
  "Austria",
  "Belgium",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Norway",
  "Switzerland",
  "United Kingdom",
];

function inferShippingZone(countryRaw = "") {
  const country = (countryRaw || "").trim().toLowerCase();
  if (!country) return "row";

  if (country.includes("spain") || country.includes("españa")) {
    return "spain";
  }

  const isEurope = EUROPE_COUNTRIES.some(
    (c) => c.toLowerCase() === country
  );

  return isEurope ? "europe" : "row";
}

function getShippingRate(zone) {
  return SHIPPING_RATES[zone]?.amount ?? 0;
}

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email, shippingCountry } = ctx.request.body;

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

      const zone = inferShippingZone(shippingCountry);
      const shippingAmount = getShippingRate(zone);
      const shippingLabel = SHIPPING_RATES[zone]?.label || "Shipping";

      if (shippingAmount > 0) {
        lineItems.push({
          price_data: {
            currency: "eur",
            product_data: {
              name: `Shipping - ${shippingLabel}`,
            },
            unit_amount: Math.round(shippingAmount * 100),
          },
          quantity: 1,
        });
      }

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
          shippingZone: zone,
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
          shippingZone: zone,
          shippingAmount,
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
