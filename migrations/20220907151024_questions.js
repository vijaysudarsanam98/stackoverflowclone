const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('questions', function(table) {

        table.increments('id');
        table.string('question')
        table.integer('userid').references('id').inTable('users')
        table.boolean('is_disabled').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('questions');
  
};

