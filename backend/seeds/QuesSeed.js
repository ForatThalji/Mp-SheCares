exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Questions').insert([
       
        { id: 1, question_text: 'How does your skin feel after using a new product?' },
        { id: 2, question_text: 'How much sun exposure do you get daily?' },
        { id: 3, question_text: 'How would you describe your skincare routine?' },
        { id: 4, question_text: 'How does your skin feel in hot weather?' },
        { id: 5, question_text: 'Do you suffer from any skin issues like acne or eczema?' },
        
      ]);
    });
};


