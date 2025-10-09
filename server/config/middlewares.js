module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'blob:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://res.cloudinary.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io'
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",  // Necesario para Stripe
            'https://js.stripe.com',
            'blob:'
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",  // Necesario para Stripe
            'https:'
          ],
          'frame-src': [
            "'self'",
            'https://js.stripe.com',
            'https://hooks.stripe.com'
          ],
          'font-src': ["'self'", 'https:', 'data:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://localhost:1337', 
        'https://ecommerce-allmyrecords.vercel.app',
        'https://sprint-9-ecommerce.onrender.com'
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];