exports.up = function(knex) {
    return knex.schema.createTable('Category', function(table) {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Category');
  };