exports.up = function(knex) {
    return knex.schema.table('Cart', function(table) {
      table.enu('status', ['Pending', 'Completed', 'Shipped']).defaultTo('Pending'); // Add status column
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('Cart', function(table) {
      table.dropColumn('status'); // Drop the status column
    });
  };
  