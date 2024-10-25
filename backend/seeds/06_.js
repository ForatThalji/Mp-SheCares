exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('Appointments').insert([
        { expert_id: 25, user_id: 58, session_date: '2024-10-01 12:00:00', session_type: 'Online', status: 'Pending', time: '12:00' },
        { expert_id: 26, user_id: 59, session_date: '2024-10-02 14:00:00', session_type: 'Onsite', status: 'Confirmed', time: '14:00' }
      ]);
    });
};
