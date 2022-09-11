const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('comments', function(table) {

        table.increments('id');
        table.string('comments')
        table.integer('answerid').references('id').inTable('answers')
        table.integer('commented_by').references('id').inTable('users')
        table.boolean('is_disabled').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('comments');
  
};

