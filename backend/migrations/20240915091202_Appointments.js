
exports.up = function(knex) {
    return knex.schema.createTable('Appointments', function(table) {
      table.increments('id').primary();
      table.integer('expert_id').unsigned().references('id').inTable('Experts').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      table.timestamp('session_date').defaultTo(knex.fn.now());
      table.string('session_type', 50).notNullable().checkIn(['Online', 'Onsite']);
      table.string('status', 50).defaultTo('Pending').checkIn(['Pending', 'Confirmed', 'Cancelled']);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Appointments');
  };


