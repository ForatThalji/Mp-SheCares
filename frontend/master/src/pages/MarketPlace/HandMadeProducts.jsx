import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HandMadeProducts() {
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to track loading status
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search input
  const navigate = useNavigate();

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/handmade/gethandmade'); // Adjust the URL if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data); // Set the products in state
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  const addToCart = (productId) => {
    navigate(`/ProdDetailshand/${productId}`); // Pass product ID in the URL
  };
  // useEffect to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <form className="max-w-md mx-auto mt-4">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            name="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={handleSearchChange} // Set the onChange handler
          />
        </div>
      </form>

      <div className="products-container my-7">
        {loading ? ( // Show loading state
          <p>Loading products...</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="wrapper w-[300px] h-[450px] mb-8 bg-grayRoot">
              <div className="container">
                <div className="top" />
                <div className="bottom">
                  <div className="left">
                    <img
                      className="w-[200px] h-[250px] m-12"
                      src={product.image_url || 'https://example.com/sample-image.jpg'} // Use product image
                      alt={product.name} // Use product name for alt text
                    />
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mx-2">
                      {product.name} {/* Display product name */}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon"></div>
                <div className="contents">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name} {/* Display product name again */}
                  </h5>
                  <p>{product.description || 'This is a sample product description.'}</p> {/* Use product description */}
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price} {/* Format price */}
                  </span>
                </div>
                <button   onClick={() => addToCart(product.id)}
                className="w-full bg-grayRoot dark:bg-gray-600 text-white py-2 px-4 rounded font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Show Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HandMadeProducts;
