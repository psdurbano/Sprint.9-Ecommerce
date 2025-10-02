module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL')
      ? {
          connectionString: env('DATABASE_URL'),
          ssl: { rejectUnauthorized: false },
        }
      : {
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          user: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          ssl: env.bool('DATABASE_SSL', true)
            ? { rejectUnauthorized: false }
            : false,
          schema: env('DATABASE_SCHEMA', 'public'),
        },
    debug: false,
  },
});
