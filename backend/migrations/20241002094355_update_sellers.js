exports.up = function(knex) {
    return knex.schema.table('Sellers', function(table) {
      table.string('status').defaultTo('active'); // Add status column with a default value
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('Sellers', function(table) {
      table.dropColumn('status'); // Remove status column if it exists
    });
  };