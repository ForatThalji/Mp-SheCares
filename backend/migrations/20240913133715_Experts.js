exports.up = function(knex) {
    return knex.schema.createTable('Experts', function(table) {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('specialty', 255);
      table.string('location', 255);
      table.text('profile_picture');
      table.text('contact_info');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('facebook_url', 2048);
      table.string('instagram_url', 2048);
      table.string('whatsapp_url', 2048);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Experts');
  };