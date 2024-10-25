exports.up = function(knex) {
    return knex.schema.createTable('Contact', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      table.string('email', 255).unique().notNullable();
      table.text('message');
      table.string('status', 50);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Contact');
  };