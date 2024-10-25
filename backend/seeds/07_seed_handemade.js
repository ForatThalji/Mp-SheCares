exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('handmade_products').del()
      .then(function () {
        // Inserts seed entries
        return knex('handmade_products').insert([
          {
            name: 'Handcrafted Wooden Jewelry Box',
            description: 'A beautiful handmade jewelry box crafted from walnut wood, with intricate carvings and velvet interior.',
            price: 49.99,
            category: 'Jewelry',
            stock_quantity: 10,
            image_url: 'https://example.com/images/wooden-jewelry-box.jpg',
            seller_id: 1, // Assuming seller with id 1 exists
            created_at: knex.fn.now()
          },
          {
            name: 'Hand-painted Ceramic Vase',
            description: 'An elegant ceramic vase painted with floral patterns, perfect for home decor.',
            price: 35.50,
            category: 'Home Decor',
            stock_quantity: 15,
            image_url: 'https://example.com/images/ceramic-vase.jpg',
            seller_id: 14, // Assuming seller with id 2 exists
            created_at: knex.fn.now()
          },
          {
            name: 'Handwoven Cotton Blanket',
            description: 'A soft and cozy cotton blanket handwoven by local artisans. Ideal for the winter season.',
            price: 85.00,
            category: 'Textiles',
            stock_quantity: 5,
            image_url: 'https://example.com/images/cotton-blanket.jpg',
            seller_id: 20, // Assuming seller with id 1 exists
            created_at: knex.fn.now()
          }
        ]);
      });
  };
  