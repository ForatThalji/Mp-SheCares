exports.up = function (knex) {
    return knex.schema.createTable('ExcelFiles', (table) => {
      table.increments('id').primary(); // Primary key
      table.string('file_name').notNullable(); // File name
      table.timestamp('date').defaultTo(knex.fn.now()); // Date of the import
      table.enum('status', ['Pending', 'Success', 'Failed']).notNullable(); // Status of the import
      table.string('file_path').notNullable(); // Path where the file is stored
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('ExcelFiles');
  };
