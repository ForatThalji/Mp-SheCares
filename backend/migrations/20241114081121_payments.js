exports.up = function(knex) {
    return knex.schema.createTable('payments', function(table) {
      table.increments('payment_id').primary(); // Auto-increment payment ID
      table.integer('order_id').unsigned().references('order_id').inTable('orders').onDelete('CASCADE');
      table.string('payment_status').defaultTo('pending'); // Payment status (pending, completed, failed)
      table.timestamp('payment_date').defaultTo(knex.fn.now()); // Payment date
      table.string('payment_method'); // Payment status (pending, completed, failed)

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('payments');
  };
  