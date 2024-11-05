exports.up = function(knex) {
    return knex.schema.createTable('Admin', function(table) {
      table.increments('id'); // مفتاح أساسي
      table.string('name').notNullable(); // اسم الأدمن
      table.string('email').notNullable().unique(); // البريد الإلكتروني
      table.string('password').notNullable(); // كلمة المرور
      table.timestamps(true, true); // حقول created_at و updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Admin');
  };
  