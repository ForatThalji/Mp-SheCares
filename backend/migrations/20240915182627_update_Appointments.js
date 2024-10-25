exports.up = function (knex) {
    return knex.schema.table('Appointments', function (table) {
      table.enu('time', ['12:00', '14:00', '09:00']);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('Appointments', function (table) {
      table.dropColumn('time');
    });
  };
