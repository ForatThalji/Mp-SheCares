import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Alternative() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  // Extract category and skinType from URL query params
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const skinType = params.get('skinType');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/alternatives', {
          params: {
            category_id: category,
            skin_type: skinType
          }
        });

        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error('Unexpected response format:', response.data);
          setProducts([]);
        }

        setLoading(false);
      } catch (err) {
        console.error('API call error:', err);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, skinType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Filter out boycotted products
  const filteredProducts = products.filter(product => !product.boycott);

  if (filteredProducts.length === 0) {
    return <div>No alternative products found.</div>;
  }

  const ProductCard = ({ product }) => (
    <div className="mb-6 mx-4">
      <div className="flex flex-col items-start w-[300px] h-[450px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="relative w-full h-[270px]">
          <img
            className="object-cover w-full h-full rounded-t-lg"
            src={product.image_url}
            alt={product.name}
          />
          {product.boycott && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-sm font-medium">
              This product is currently boycotted
            </div>
          )}
        </div>
        <div className="flex-grow p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">${product.price}</span>
            <span className="text-sm text-gray-600 bg-yellow-200 rounded-full px-2">{product.skin_type}</span>
          </div>
          {/* <Link
            to="/ProdDetails"
            className="mt-4 block text-center text-white bg-gray-800 rounded-md px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Shop Now
          </Link> */}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-center mb-7 text-3xl font-semibold text-gray-800">
        Alternative products are:
      </h1>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Alternative;
