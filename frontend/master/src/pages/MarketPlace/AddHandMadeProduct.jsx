import React, { useState } from 'react';

export default function AddHandMadeProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock_quantity: '',
    image_url: '',
    seller_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع تحديث الصفحة

    try {
      const response = await fetch('http://localhost:3001/api/handmade/addhandmade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Product added successfully!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {['name', 'price', 'description', 'category', 'stock_quantity', 'image_url', 'seller_id'].map((field) => (
            <div className="space-y-2" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 capitalize"
              >
                {field.replace('_', ' ')}
              </label>
              <input
                id={field}
                name={field}
                type={field === 'price' || field === 'stock_quantity' ? 'number' : 'text'}
                placeholder={`Enter ${field.replace('_', ' ')}`}
                className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50 focus:ring-cyan-500"
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
