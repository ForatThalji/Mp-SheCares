import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Ensure you've imported Swal
import creamSvg from '../../assets/creamSvg.png';
import facialFoam from '../../assets/facialFoam.png';
import facialMask from '../../assets/facialMask.png';
import sunblock from '../../assets/sunblock.png';
import serum from '../../assets/serum.png';
import tips from '../../assets/tips.jpg';

import brusher from '../../assets/brusher.png';

import { useNavigate } from 'react-router-dom';
// import LuxuryInstructionCard from '../../Components/LuxuryInstructionCard';

function Search() {
  const [category_id, setCategoryId] = useState('');
  const [skinType, setSkinType] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

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
    <div>

      {/* Icon Selection */}
      <div className="icons flex justify-around">
     

        {/* <div className="bg-pinkRoot w-64 h-65 -ml-60">dd</div> */}
        <div className=''>
        {/* <LuxuryInstructionCard /> */}

        </div>
        <button onClick={() => handleIconClick(1)}>
          <img src={creamSvg} width="130px" height="130px" alt="Cleanser" />
          <p>Cleanser</p>
        </button>
        <button onClick={() => handleIconClick(2)}>
          <img src={facialMask} width="130px" height="130px" alt="Mask" />
          <p>Mask</p>
        </button>
        <button onClick={() => handleIconClick(3)}>
          <img src={facialFoam} width="130px" height="130px" alt="Moist" />
          <p>Moisturizer</p>
        </button>
        <button onClick={() => handleIconClick(4)}>
          <img src={sunblock} width="130px" height="130px" alt="Sunblock" />
          <p>Sunblock</p>
        </button>
        <button onClick={() => handleIconClick(5)}>
          <img src={serum} width="130px" height="130px" alt="Serum" />
          <p>Serum</p>
        </button>
      </div>



      {/* <div className="relative w-67 h-72 -ml-60">
  <span
  className="absolute top-12 left-3 mt-[100px] w-[270px] text-center text-white font-light text-sm bg-black bg-opacity-50 p-1 "
  style={{ transform: 'rotate(350deg)',color:'black'}} // Change 30 to your desired degree
>
First, select a category, then choose your skin type and specify the price and age ranges; if a product is boycotted, click the red triangle to view alternatives.
</span>


  
</div> */}
  {/* <img className="w-[600px] h-[300px] mt-10" src={brusher} alt="Description of image" /> */}


      {/* Search Filters */}
      <div className="flex mx-44 my-60 mb-24">
        {/* Skin Type Filter */}
        <FilterDropdown
          label="Skin Type"
          options={["Normal", "Oily", "Combination", "Dry"]}
          onChange={(e) => setSkinType(e.target.value)}
        />
        {/* Age Range Filter */}
        <FilterDropdown
          label="Age"
          options={["1-10", "11-20", "21-40", "41-60"]}
          onChange={(e) => setAgeRange(e.target.value)}
        />
        {/* Price Range Filter */}
        <FilterDropdown
          label="Price"
          options={["1-5 JOD", "6-11 JOD", "12-17 JOD", "18-25 JOD"]}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="text-grayRoot w-24 h-12 mx-4 my-6 bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Products Display */}
      <div className="flex flex-wrap justify-center">
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
  <form className="max-w-sm mx-auto w-[300px]">
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

// Product Card Component
// Product Card Component
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
