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
    e.preventDefault();

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100  p-8 animate-fadeIn">
      <div className="max-w-2xl mx-auto border-2">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
            <h1 className="text-3xl font-bold text-white text-center">Add New Product</h1>
          </div>
          
          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['name', 'price', 'description', 'category', 'stock_quantity', 'image_url', 'seller_id'].map((field) => (
                <div 
                  key={field}
                  className="transform hover:scale-[1.02] transition-all duration-300"
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-semibold text-gray-700 mb-2 capitalize"
                  >
                    {field.replace('_', ' ')}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'price' || field === 'stock_quantity' ? 'number' : 'text'}
                    placeholder={`Enter ${field.replace('_', ' ')}`}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-greenRoot  text-white py-3 px-6 rounded-lg font-semibold 
                          transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 
                          focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}