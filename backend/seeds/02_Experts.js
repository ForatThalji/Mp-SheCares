exports.seed = function (knex) {
  // Deletes ALL existing entries in the Experts table
  return knex('Experts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Experts').insert([
        {
          name: 'Dr. John Doe',
          specialty: 'Sensitive Skin',
          location: 'New York, USA',
          profile_picture: 'https://example.com/profile_pics/john_doe.jpg',
          contact_info: 'john.doe@example.com, +123456789',
          facebook_url: 'https://facebook.com/johndoe',
          instagram_url: 'https://instagram.com/johndoe',
          whatsapp_url: 'https://wa.me/123456789',
        },
        {
          name: 'Dr. Jane Smith',
          specialty: 'Hair loss',
          location: 'Los Angeles, USA',
          profile_picture: 'https://example.com/profile_pics/jane_smith.jpg',
          contact_info: 'jane.smith@example.com, +987654321',
          facebook_url: 'https://facebook.com/janesmith',
          instagram_url: 'https://instagram.com/janesmith',
          whatsapp_url: 'https://wa.me/987654321',
        },
        {
          name: 'Dr. Emily Johnson',
          specialty: 'Eczema',
          location: 'London, UK',
          profile_picture: 'https://example.com/profile_pics/emily_johnson.jpg',
          contact_info: 'emily.johnson@example.com, +1122334455',
          facebook_url: 'https://facebook.com/emilyjohnson',
          instagram_url: 'https://instagram.com/emilyjohnson',
          whatsapp_url: 'https://wa.me/1122334455',
        },
        {
          name: 'Dr. Ahmed Ali',
          specialty: 'Acne',
          location: 'Cairo, Egypt',
          profile_picture: 'https://example.com/profile_pics/ahmed_ali.jpg',
          contact_info: 'ahmed.ali@example.com, +20123456789',
          facebook_url: 'https://facebook.com/ahmedali',
          instagram_url: 'https://instagram.com/ahmedali',
          whatsapp_url: 'https://wa.me/20123456789',
        },
        {
          name: 'Dr. Ahmad',
          specialty: 'Sensitive Skin',
          location: 'New York, USA',
          profile_picture: 'https://png.pngtree.com/png-clipart/20231230/original/pngtree-vector-art-cute-little-boy-character-png-image_13974776.png',
          contact_info: 'john.doe@example.com, +123456789',
          facebook_url: 'https://facebook.com/johndoe',
          instagram_url: 'https://instagram.com/johndoe',
          whatsapp_url: 'https://wa.me/123456789',
        },
      ]);
    });
};
