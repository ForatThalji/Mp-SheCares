import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const navigate = useNavigate();

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/discover');
        setAllProducts(response.data);
        setFilteredProducts(response.data);
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

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const addToCart = (productId) => navigate(`/ProdDetails/${productId}`);

  // Pagination handlers
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentItems.map((product, index) => (
          <div key={index} className="wrapper w-[290px] h-[400px] mb-8 bg-grayRoot">
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
                  product.boycott
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'hover:bg-gray-800 dark:hover:bg-gray-700'
                }`}
                onClick={() => addToCart(product.id)}
                disabled={product.boycott}
              >
                {product.boycott ? 'Boycotted' : 'Show Details'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center items-center space-x-4 my-4">
        {/* <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button> */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
        {/* <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button> */}
      </div>
    </div>
  );
}

export default Products;
