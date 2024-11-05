import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ShoppingCart, Heart, AlertTriangle } from 'lucide-react';
import Swal from 'sweetalert2';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProdDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products/discoverbyid/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = async (productId, quantity = 1) => {
    if (product.stock === 0) {
      Swal.fire({
        title: 'Out of Stock!',
        text: 'This product is currently out of stock and cannot be added to the cart.',
        icon: 'warning',
        confirmButtonText: 'Close',
      });
      return;
    }

    if (isAnimating || loading) return;

    // Start animation
    setIsAnimating(true);
    
    // Create floating cart icon
    const button = document.createElement('div');
    button.className = 'fixed z-50 flex items-center justify-center';
    button.innerHTML = `<div class="w-12 h-12 flex items-center justify-center bg-greenRoot text-white rounded-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    </div>`;

    // Get positions
    const buttonRect = document.querySelector('#add-to-cart-btn').getBoundingClientRect();
    const cartIcon = document.querySelector('#cart-icon');
    const cartRect = cartIcon ? cartIcon.getBoundingClientRect() : { top: 0, right: 0 };

    // Set initial position
    button.style.left = `${buttonRect.left}px`;
    button.style.top = `${buttonRect.top}px`;
    document.body.appendChild(button);

    // Animate to cart
    button.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    button.style.transform = 'scale(0.5)';
    button.style.left = `${cartRect.right - 25}px`;
    button.style.top = `${cartRect.top - 25}px`;

    setLoading(true);
    try {
      const userId = localStorage.getItem("userI");
      const response = await axios.post('http://localhost:3001/api/cart/addtocart', {
        product_id: productId,
        quantity,
        user_id: userId,
      });
      console.log('Product added to cart:', response.data);

      Swal.fire({
        title: 'Product Added to Cart!',
        text: 'Your skincare product has been successfully added to the cart.',
        icon: 'success',
        timer: 5000,
        timerProgressBar: true,
        imageUrl: 'https://content.presentermedia.com/files/animsp/00007000/7277/stick_figure_shopping_cart_lg_wm.gif',
        imageHeight: 200,
        imageAlt: 'Skincare Product',
        background: '#f4f4f9',
        color: 'black',
        confirmButtonColor: '#4CAF50',
      });
      
    } catch (error) {
      console.error('Error adding to cart:', error);

      Swal.fire({
        title: 'Error!',
        text: 'Failed to add product to cart. Please try again.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } finally {
      setLoading(false);
      // Clean up animation
      setTimeout(() => {
        document.body.removeChild(button);
        setIsAnimating(false);
      }, 800);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-greenRoot"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover mr-[12px]"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition">
                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 p-8">
              {product.stock === 0 && (
                <div className="mb-6 bg-red-50 border-l-4 border-[red] border-red-400 p-4 rounded-r-lg flex items-start">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-[red]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Out of Stock</h3>
                    <p className="mt-1 text-sm text-red-700">
                      This product is currently out of stock and cannot be added to the cart.
                    </p>
                  </div>
                </div>
              )}
              
              {product.stock > 0 && product.stock <= 5 && (
                <div className="mb-6 bg-yellow-50 border-l-4 border-[red] border-yellow-400 p-4 rounded-r-lg flex items-start">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-[red]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Limited Stock</h3>
                    <p className="mt-1 text-sm text-yellow-700">
                      Only {product.stock} items left in stock!
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-greenRoot">${product.price}</span>
                  <span className={`px-3 py-1 text-lg font-medium rounded-full ${
                    product.stock <= 5 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {product.stock} in stock
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Skin Type</h2>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:border-greenRoot hover:text-greenRoot transition">
                    {product.skin_type}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
      <Link to="/Cart" className="flex-1">
        <button
          id="add-to-cart-btn"
          onClick={() => addToCart(product.id, quantity)}
          className={`w-full bg-greenRoot text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-greenRoot/90 transition ${
            product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
          } relative overflow-hidden`} // Added relative and overflow-hidden
          disabled={loading || isAnimating || product.stock === 0}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </button>
      </Link>
    </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {[...Array(7)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
                  <img
                    src={`http://localhost:3001/assets/product${index + 1}.jpg`}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Product {index + 1}</h3>
                    <span className="text-xl font-bold text-greenRoot">$19.99</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;