// config/middlewares.js

module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "blob:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "https://res.cloudinary.com",
          ],
          "media-src": ["'self'", "data:", "blob:", "market-assets.strapi.io"],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "https://js.stripe.com",
            "https://checkout.stripe.com",
            "blob:",
          ],
          "style-src": ["'self'", "'unsafe-inline'", "https:"],
          "frame-src": [
            "'self'",
            "https://js.stripe.com",
            "https://hooks.stripe.com",
            "https://checkout.stripe.com",
          ],
          "font-src": ["'self'", "https:", "data:"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: "*",
      credentials: false,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
