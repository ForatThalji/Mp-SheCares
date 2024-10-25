// seeds/2024xxxxxx_users.js

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          password: 'hashed_password_1', // Replace with actual hashed password
          phone_number: '123-456-7890',
          address: '123 Main St, Anytown, USA',
          profile_picture: 'http://example.com/profile_pics/john_doe.jpg',
          date_of_birth: '1980-01-01',
          updated_at: new Date()
        },
        {
          first_name: 'Jane',
          last_name: 'Smith',
          email: 'jane.smith@example.com',
          password: 'hashed_password_2', // Replace with actual hashed password
          phone_number: '987-654-3210',
          address: '456 Elm St, Anytown, USA',
          profile_picture: 'http://example.com/profile_pics/jane_smith.jpg',
          date_of_birth: '1990-02-15',
          updated_at: new Date()
        },
        {
          first_name: 'Alice',
          last_name: 'Johnson',
          email: 'alice.johnson@example.com',
          password: 'hashed_password_3', // Replace with actual hashed password
          phone_number: '555-555-5555',
          address: '789 Oak St, Anytown, USA',
          profile_picture: 'http://example.com/profile_pics/alice_johnson.jpg',
          date_of_birth: '1985-05-20',
          updated_at: new Date()
        }
      ]);
    });
};
