require('dotenv').config(); 

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: process.env.DB_PASSWORD,
      database: 'SheCares',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: process.env.DB_PASSWORD,
      database: 'SheCares',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
