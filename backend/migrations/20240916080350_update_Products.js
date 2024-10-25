exports.up = function(knex) {
    return knex.schema.table('Products', function(table) {
      table.integer('age'); // Add the column to the table
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('Products', function(table) {
      table.dropColumn('age'); // Remove the column if rolling back
    });
  };
  