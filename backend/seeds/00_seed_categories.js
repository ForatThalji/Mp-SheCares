exports.seed = async function(knex) {
  await knex('Category').del();
  await knex('Category').insert([
    { id: 1, name: 'Cleanser', description: 'Products for clean your face', created_at: knex.fn.now() },
    { id: 2, name: 'Mask', description: 'Products for repaire sth', created_at: knex.fn.now() },
    { id: 3, name: 'Moist', description: 'Products for clean your body', created_at: knex.fn.now() },
    { id: 4, name: 'sunblock', description: 'Products for sun protection', created_at: knex.fn.now() },
    { id: 5, name: 'Serum', description: 'Products for your face', created_at: knex.fn.now() }
  ]);
};