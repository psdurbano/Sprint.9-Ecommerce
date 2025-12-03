module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: (origin) => {
        if (!origin) return true;
  
        const allowedOrigins = [
          "http://localhost:3000",
          "http://localhost:1337",
          "https://ecommerce-allmyrecords.vercel.app",
          "https://sprint-9-ecommerce.onrender.com",
        ];
  
        const isVercelPreview = /^https:\/\/.*\.vercel\.app$/.test(origin);
  
        return allowedOrigins.includes(origin) || isVercelPreview;
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    },
  },
{
  name: "strapi::cors",
  config: {
    headers: "*",
    origin: [
      "http://localhost:3000",
      "http://localhost:1337",
      "https://ecommerce-allmyrecords.vercel.app",
      "https://sprint-9-ecommerce.onrender.com",
      "https://*.vercel.app"
    ],
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
