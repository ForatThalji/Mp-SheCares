// migrations/2024MMDD_create_checkouts_table.js
exports.up = function(knex) {
    return knex.schema.createTable('checkouts', function(table) {
      table.increments('id').primary(); // Unique identifier for each checkout
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE'); // Foreign key to users table
      table.string('payment_method'); // Payment method chosen (e.g., credit card, PayPal)
      table.string('card_holder_name'); // Name on the card
      table.string('card_number'); // Card number (consider encryption for security)
      table.string('expiry_date'); // Expiry date of the card
      table.string('cvv'); // CVV code (consider encryption for security)
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp for when the order was created
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Timestamp for when the order was last updated
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('checkouts');
  };
  

