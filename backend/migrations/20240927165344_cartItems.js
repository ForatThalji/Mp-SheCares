exports.up = function(knex) {
    return knex.schema.createTable('cartItems', function(table) {
      table.increments('id').primary();
      table.integer('cart_id').unsigned().references('id').inTable('Cart').onDelete('CASCADE');
      table.integer('product_id').unsigned().references('id').inTable('Products').onDelete('CASCADE');
      table.integer('quantity').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cartItems');
  };