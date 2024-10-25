exports.up = function(knex) {
    return knex.schema.createTable('handmade_products', function(table) {
      table.increments('id').primary(); // Auto-incrementing ID for each product
      table.string('name').notNullable(); // Name of the product
      table.text('description'); // Detailed description of the product
      table.decimal('price', 10, 2).notNullable(); // Price of the product
      table.string('category'); // Category, like jewelry, furniture, etc.
      table.integer('stock_quantity').unsigned().defaultTo(0); // Available stock
      table.string('image_url'); // Link to the product image
      table.integer('seller_id').unsigned().references('id').inTable('Sellers').onDelete('CASCADE'); // Foreign key to sellers table
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp when the product was added
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('handmade_products');
  };
  