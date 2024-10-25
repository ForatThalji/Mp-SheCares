exports.up = function(knex) {
    return knex.schema.createTable('Questions', function(table) {
      table.increments('id').primary();
      table.text('question_text').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Questions');
  };
