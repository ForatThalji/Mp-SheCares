exports.seed = async function (knex) {
  // Deletes ALL existing entries in the Choices table
  await knex('Choices').del();

  // Inserts seed entries for questions related to skin
  await knex('Choices').insert([
    // Choices for Question 1
    { question_id: 1, choice_text: 'Oily and Shiny', mark: 5 },
    { question_id: 1, choice_text: 'Dull and Tired', mark: 3 },
    { question_id: 1, choice_text: 'Normal and Even', mark: 4 },
    { question_id: 1, choice_text: 'Dry and Flaky', mark: 2 },

    // Choices for Question 2
    { question_id: 2, choice_text: 'Dry', mark: 2 },
    { question_id: 2, choice_text: 'Oily', mark: 5 },
    { question_id: 2, choice_text: 'Combination', mark: 4 },
    { question_id: 2, choice_text: 'Sensitive', mark: 3 },

    // Choices for Question 3
    { question_id: 3, choice_text: 'Oily and Shiny', mark: 5 },
    { question_id: 3, choice_text: 'Dull and Tired', mark: 3 },
    { question_id: 3, choice_text: 'Normal and Even', mark: 4 },
    { question_id: 3, choice_text: 'Dry and Flaky', mark: 2 },
  ]);
};
