import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Ensure you've imported Swal
import creamSvg from '../../assets/creamSvg.png';
import facialFoam from '../../assets/facialFoam.png';
import facialMask from '../../assets/facialMask.png';
import sunblock from '../../assets/sunblock.png';
import serum from '../../assets/serum.png';
import tips from '../../assets/tips.jpg';
import toast, { Toaster } from 'react-hot-toast';

import brusher from '../../assets/brusher.png';

import { useNavigate } from 'react-router-dom';

function Search() {
  const [category_id, setCategoryId] = useState('');
  const [skinType, setSkinType] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    toast((t) => (
      <div className="bg-violet p-4 rounded-md shadow-lg flex flex-col items-start text-gray-800">
        <p className="mb-2 text-sm">
          First, select a <b>Category</b> from these icons, then choose your <b>skin type</b> and specify the <b>price</b> and <b>age</b> ranges.
        </p>
      </div>
    ), {
      duration: 5000, // Hide toast after 5 seconds
    });
  }, []);

  const handleIconClick = (id) => {
    setCategoryId(id);
    console.log(`Category ID ${id} selected`);
  };

  const handleView = ({ category_id, skinType }) => {
    navigate(`/Alternative?category=${category_id}&skinType=${skinType}`);
  };

  const handleSearch = async () => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.get('http://localhost:3001/api/products/filters', {
        params: {
          category_id,
          skin_type: skinType,
          age_range: ageRange,
          price_range: priceRange,
        },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      Swal.fire({
        icon: 'info',
        title: 'No Matching Products Found',
        text: 'Please try adjusting your search options.',
        confirmButtonText: 'Okay',
      });
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="px-4 py-8">

      {/* Icon Selection */}
      <div className="flex flex-wrap justify-evenly gap-4">
        <button onClick={() => handleIconClick(1)} className="flex flex-col items-center">
          <img src={creamSvg} width="130px" height="130px" alt="Cleanser" />
          <p className="text-sm">Cleanser</p>
        </button>
        <button onClick={() => handleIconClick(2)} className="flex flex-col items-center">
          <img src={facialMask} width="130px" height="130px" alt="Mask" />
          <p className="text-sm">Mask</p>
        </button>
        <button onClick={() => handleIconClick(3)} className="flex flex-col items-center">
          <img src={facialFoam} width="130px" height="130px" alt="Moisturizer" />
          <p className="text-sm">Moisturizer</p>
        </button>
        <button onClick={() => handleIconClick(4)} className="flex flex-col items-center">
          <img src={sunblock} width="130px" height="130px" alt="Sunblock" />
          <p className="text-sm">Sunblock</p>
        </button>
        <button onClick={() => handleIconClick(5)} className="flex flex-col items-center">
          <img src={serum} width="130px" height="130px" alt="Serum" />
          <p className="text-sm">Serum</p>
        </button>
      </div>

      <Toaster position="top-left" className="mt-4" />

      {/* Search Filters */}
      <div className="flex flex-wrap justify-center gap-6 my-8">
        <FilterDropdown
          label="Skin Type"
          options={["Normal", "Oily", "Combination", "Dry"]}
          onChange={(e) => setSkinType(e.target.value)}
        />
        <FilterDropdown
          label="Age"
          options={["1-10", "11-20", "21-40", "41-60"]}
          onChange={(e) => setAgeRange(e.target.value)}
        />
        <FilterDropdown
          label="Price"
          options={["1-5 JOD", "6-11 JOD", "12-17 JOD", "18-25 JOD"]}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="mt-6 text-grayRoot w-full sm:w-36 h-12 bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Products Display */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            category_id={category_id}
            skinType={skinType}
            handleView={handleView}
          />
        ))}
      </div>
    </div>
  );
}

// Filter Dropdown Component
const FilterDropdown = ({ label, options, onChange }) => (
  <form className="w-full sm:w-60">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={onChange}
    >
      <option value="">Choose {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </form>
);

const ProductCard = ({ product, category_id, skinType, handleView }) => (
  <div className="mb-6 mx-4">
    <div className="relative flex flex-col w-[300px] h-[450px] overflow-hidden rounded-xl bg-grayRoot shadow-3xl transition-all duration-700 hover:shadow-xl">
      <div className="relative h-[270px] overflow-hidden">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src={product.image_url}
          alt="product image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <p className="text-sm text-gray-600 h-26 w-28 p-2 rounded bg-[#e8cbb5] font-semibold line-clamp-3">
            {product.skin_type}
          </p>
        </div>
      </div>

      {/* Conditional Red Triangle */}
      {product.boycott && (
       <span
       className="absolute top-3 right-3 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors duration-300 cursor-pointer animate-bounce"
       onClick={() => handleView({ category_id, skinType })}
     >
       <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 22L2 4H22L12 22Z" fill="red" />
       </svg>
     </span>
      )}

      
    </div>
  </div>
);

export default Search;
