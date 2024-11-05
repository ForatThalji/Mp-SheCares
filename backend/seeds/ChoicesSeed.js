exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Choices').del()
    .then(function () {
      // Inserts seed entries
      return knex('Choices').insert([
        // Choices for Question 2
        { id: 1, question_id: 1, choice_text: 'Irritated and itchy', mark: 1 },
        { id: 2, question_id: 1, choice_text: 'Nothing happens', mark: 2 },
        { id: 3, question_id: 1, choice_text: 'Noticeable improvement', mark: 3 },
        { id: 4, question_id: 1, choice_text: 'Excess oil', mark: 4 },

        // Choices for Question 3
        { id: 5, question_id: 2, choice_text: 'Very little', mark: 1 },
        { id: 6, question_id: 2, choice_text: 'Moderate (1-3 hours)', mark: 2 },
        { id: 7, question_id: 2, choice_text: 'A lot (more than 3 hours)', mark: 3 },
        { id: 8, question_id: 2, choice_text: 'I only get sun exposure outdoors', mark: 4 },

        // Choices for Question 4
        { id: 9, question_id: 3, choice_text: 'Very simple (only a cleanser)', mark: 1 },
        { id: 10, question_id: 3, choice_text: 'Regular (cleanser and moisturizer)', mark: 2 },
        { id: 11, question_id: 3, choice_text: 'Complex (multiple products)', mark: 3 },
        { id: 12, question_id: 3, choice_text: 'Non-existent', mark: 4 },

        // Choices for Question 5
        { id: 13, question_id: 4, choice_text: 'Very oily', mark: 1 },
        { id: 14, question_id: 4, choice_text: 'Dry', mark: 2 },
        { id: 15, question_id: 4, choice_text: 'Comfortable', mark: 3 },
        { id: 16, question_id: 4, choice_text: 'Sensitive and reactive', mark: 4 },

        // Choices for Question 6
        { id: 17, question_id: 5, choice_text: 'Yes, acne', mark: 1 },
        { id: 18, question_id: 5, choice_text: 'Yes, eczema', mark: 2 },
        { id: 19, question_id: 5, choice_text: 'I don\'t have any issues', mark: 3 },
        { id: 20, question_id: 5, choice_text: 'Yes, allergies', mark: 4 }
      ]);
    });
};
