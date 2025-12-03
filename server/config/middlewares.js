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
      origin: (origin) => {
        if (!origin) return true;

        const allowed = [
          "http://localhost:3000",
          "http://localhost:1337",
          "https://ecommerce-allmyrecords.vercel.app",
          "https://sprint-9-ecommerce.onrender.com",
        ];

        const isVercelPreview = /^https:\/\/.*\.vercel\.app$/.test(origin);

        return allowed.includes(origin) || isVercelPreview;
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
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