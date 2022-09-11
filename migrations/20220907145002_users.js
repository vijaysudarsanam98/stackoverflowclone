const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('users', function(table) {

        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable().unique()
        table.boolean('is_disabled').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('users');
  
};

