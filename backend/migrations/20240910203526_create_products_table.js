exports.up = function(knex) {
    return knex.schema.createTable('Products', function(table) {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.text('description');
      table.decimal('price', 10, 2).notNullable();
      table.integer('category_id').unsigned().references('id').inTable('Category').onDelete('SET NULL');
      table.text('image_url');
      table.integer('stock');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('alternative_id').defaultTo(null);
      table.integer('status').defaultTo(null);
      table.boolean('boycott').defaultTo(null);
      table.string('skin_type', 255).defaultTo(null);
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('SET NULL');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Products');
  };