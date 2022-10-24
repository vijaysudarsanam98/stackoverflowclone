const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('points', function(table) {

        table.increments('id');
        table.string('points')
        table.integer('answerId').references('id').inTable('answers')
        table.integer('userId').references('id').inTable('users')
        table.boolean('is_disabled').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('points');
  
};

