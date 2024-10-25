// exports.seed = async function(knex) {
//   await knex('Products').del();
//   await knex('Products').insert([
//     { name: 'Hydrating Face Cream', description: 'A rich and nourishing cream.', price: 29.99, category_id: 1, image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Far%2Ffree-png-dwcgt&psig=AOvVaw2RiiOlf90tBSB8xOU-x5kZ&ust=1726090162463000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDLo8WpuYgDFQAAAAAdAAAAABAE', stock: 50, alternative_id: 101, status: 1, boycott: false, skin_type: 'All Skin Types', user_id: 58 },
//     { name: 'Sunscreen SPF 50', description: 'Broad-spectrum sunscreen.', price: 19.99, category_id: 2, image_url: 'https://example.com/image.jpg', stock: 30, alternative_id: 102, status: 1, boycott: false, skin_type: 'Sensitive', user_id: 58 },
//     { name: 'Vitamin C Serum', description: 'Brightens and evens skin tone.', price: 34.99, category_id: 3, image_url: 'https://example.com/image.jpg', stock: 40, alternative_id: 103, status: 1, boycott: false, skin_type: 'Oily', user_id: 58 },
//     { name: 'Hydrating Face Cream', description: 'A rich and nourishing cream.', price: 29.99, category_id: 1, image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Far%2Ffree-png-dwcgt&psig=AOvVaw2RiiOlf90tBSB8xOU-x5kZ&ust=1726090162463000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDLo8WpuYgDFQAAAAAdAAAAABAE', stock: 50, alternative_id: 101, status: 1, boycott: false, skin_type: 'All Skin Types', user_id: 58 },
//     { name: 'Sunscreen SPF 50', description: 'Broad-spectrum sunscreen.', price: 19.99, category_id: 2, image_url: 'https://example.com/image.jpg', stock: 30, alternative_id: 102, status: 1, boycott: false, skin_type: 'Sensitive', user_id: 58 },
//     { name: 'Vitamin C Serum', description: 'Brightens and evens skin tone.', price: 34.99, category_id: 3, image_url: 'https://example.com/image.jpg', stock: 40, alternative_id: 103, status: 1, boycott: false, skin_type: 'Oily', user_id: 58 }
//   ]);

// };




exports.seed = function (knex) {
  // Deletes ALL existing entries in the Products table
  return knex('Products').del()
    .then(function () {
      // Inserts seed entries
      return knex('Products').insert([
        {
          name: 'Moisturizing Cream',
          description: 'A lightweight, non-greasy moisturizer perfect for daily use.',
          price: 29.99,
          category_id: 1, // Assuming category with id 1 exists
          image_url: 'https://example.com/images/moisturizing_cream.jpg',
          stock: 100,
          alternative_id: null,
          status: 1, // Assuming status 1 is for active products
          boycott: false,
          skin_type: 'Dry',
          user_id: 73, // Assuming user with id 2 exists
          age: 30 // New column added
        },
        {
          name: 'Sunscreen SPF 50',
          description: 'Broad-spectrum sunscreen for sensitive skin.',
          price: 19.99,
          category_id: 2, // Assuming category with id 2 exists
          image_url: 'https://example.com/images/sunscreen_spf50.jpg',
          stock: 50,
          alternative_id: null,
          status: 1,
          boycott: false,
          skin_type: 'Sensitive',
          user_id: 73, // Assuming user with id 3 exists
          age: 25
        },
        {
          name: 'Facial Cleanser',
          description: 'A gentle facial cleanser suitable for all skin types.',
          price: 12.99,
          category_id: 3, // Assuming category with id 3 exists
          image_url: 'https://example.com/images/facial_cleanser.jpg',
          stock: 200,
          alternative_id: null,
          status: 1,
          boycott: false,
          skin_type: 'All',
          user_id: 73, // Assuming user with id 1 exists
          age: 22
        }
      ]);
    });
};

