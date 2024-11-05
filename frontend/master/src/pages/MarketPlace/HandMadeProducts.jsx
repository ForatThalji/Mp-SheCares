import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HandMadeProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/handmade/gethandmade');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (productId) => {
    navigate(`/ProdDetailshand/${productId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-screen w-full bg-gray-200 p-8 lg:px-24">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map(product => (
              <div
                key={product.id}
                className="bg-white w-full h-56 lg:h-72 rounded-3xl p-6 shadow-lg flex flex-row"
              >
                <div className="relative w-1/2 h-full bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute rounded-full bg-white h-8 w-8 z-40 top-2 right-2 p-1 cursor-pointer">
                    <svg
                      className="text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <img
                    className="relative h-full w-full object-cover"
                    src={product.image_url || 'https://example.com/sample-image.jpg'}
                    alt={product.name}
                  />
                </div>
                <div className="w-1/2 h-full ml-4 flex flex-col justify-between">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-600">{product.name}</h4>
                  <p className="text-sm lg:text-base text-gray-400">{product.description || 'Lorem ipsum dolor sit...'}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm lg:text-lg font-bold text-gray-600">{product.price} JOD</p>
                    <button
                      className="text-sm lg:text-base font-bold rounded-full hover:bg-greenRoot h-8 lg:h-10 px-4 lg:px-6 text-white shadow-lg"
                      onClick={() => addToCart(product.id)}
                    >
                      + cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HandMadeProducts;
