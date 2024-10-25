exports.up = function(knex) {
    return knex.schema.createTable('Sellers', function(table) {
      table.increments('id').primary(); // Auto-incrementing ID
      table.string('first_name').notNullable(); // First name
      table.string('last_name').notNullable(); // Last name
      table.string('email').notNullable().unique(); // Email
      table.string('password').notNullable(); // Password
      table.string('address').notNullable(); // Address
      table.string('phone_number').notNullable(); // Phone number
      table.string('profile_image').nullable(); // Profile image (file path)
      table.string('certificate').nullable(); // Certificate (file path)
      table.timestamps(true, true); // Created and updated timestamps
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Sellers'); // Drop table if exists
  };
