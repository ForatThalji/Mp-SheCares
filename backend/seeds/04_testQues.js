exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Questions').insert([
        { id: 1, question_text: 'What is your skin type?' },
        { id: 2, question_text: 'How does your skin feel after washing your face?' },
        { id: 3, question_text: 'What is your primary skin concern?' }
      ]);
    });
};

