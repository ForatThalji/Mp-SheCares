exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {
      table.increments('order_id').primary(); // Auto-increment order ID
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      table.decimal('total_price', 10, 2).notNullable(); // Total price of the order
      table.string('order_status').defaultTo('pending'); // Order status (pending, completed, etc.)
      table.string('payment_method').notNullable(); // Payment method (Cash, PayPal, etc.)
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Updated timestamp
  
     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
  };
