exports.up = function(knex) {
    return knex.schema.createTable('Cart', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Cart');
  };
  