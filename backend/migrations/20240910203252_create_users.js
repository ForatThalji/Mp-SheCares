exports.up = function(knex) {
    return knex.schema.createTable('Users', function(table) {
      table.increments('id').primary();
      table.string('first_name', 255);
      table.string('last_name', 255);
      table.string('email').unique().notNullable();
      table.string('password');
      table.string('phone_number', 20);
      table.text('address');
      table.text('profile_picture'); // URL or path to profile picture
      table.date('date_of_birth');
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Users');
  };
