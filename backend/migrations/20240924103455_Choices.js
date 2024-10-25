exports.up = function(knex) {
    return knex.schema.createTable('Choices', function(table) {
      table.increments('id').primary();
      table.integer('question_id').unsigned().references('id').inTable('Questions').onDelete('CASCADE');
      table.string('choice_text', 255).notNullable();
      table.integer('mark').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Choices');
  };