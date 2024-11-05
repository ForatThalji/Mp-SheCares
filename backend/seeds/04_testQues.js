exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Questions').insert([
        { id: 1, question_text: 'your skin type?' },
        { id: 2, question_text: 's your skin feel after washing your face?' },
        { id: 3, question_text: 's your primary skin concern?' }
      ]);
    });
};

