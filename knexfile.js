// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  

  development: {
    client: 'postgresql',
    connection: {
      database: 'stackoverflowdb',
      user:     'postgres',
      password: 'vijay'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
    }
  }

  

};
