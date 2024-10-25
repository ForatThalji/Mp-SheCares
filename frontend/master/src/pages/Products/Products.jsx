import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [allProducts, setAllProducts] = useState([]); // State to hold all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for products based on search
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const navigate = useNavigate();
  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/discover');
        setAllProducts(response.data);
        setFilteredProducts(response.data); // Initially display all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, allProducts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle adding product to local storage
  const addToCart = (productId) => {
    navigate(`/ProdDetails/${productId}`); // Pass product ID in the URL
  };

  return (
    <div>
      <form className="max-w-md mx-auto mt-4">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products..."
          />
        </div>
      </form>

      <div className="products-container my-7">
        {currentItems.map((product, index) => {
          const isBoycotted = product.boycott; // Check if the product is boycotted


// opacity-50 pointer-events-none


          return (
            <div
              key={index}
              className={`wrapper w-[290px] h-[400px] mb-8 bg-grayRoot ${
                isBoycotted ? '' : ''
              }`}
            >
              <div className="container">
                <div className="top" />
                <div className="bottom">
                  <div className="left">
                    <img
                      className="w-[200px] h-[250px] m-12"
                      src={product.image_url}
                      alt={product.name}
                    />
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mx-2">
                      {product.name}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon"></div>
                <div className="contents">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                  <p>{product.description}</p>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                </div>
                <button
                  className={`w-full bg-grayRoot dark:bg-gray-600 text-white py-2 px-4 rounded font-bold ${
                    isBoycotted
                      ? 'bg-gray-300 cursor-not-allowed' // Disable button style if boycotted
                      : 'hover:bg-gray-800 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => addToCart(product.id)}
                  disabled={isBoycotted} // Disable the button if the product is boycotted
                >
                  {isBoycotted ? 'Boycotted' : 'Show Details'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination or additional components */}
    </div>
  );
}

export default Products;
