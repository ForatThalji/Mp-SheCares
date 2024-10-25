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
  const [loading, setLoading] = useState(false); // حالة التحميل

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
      // عرض تنبيه إذا كان المخزون 0
      Swal.fire({
        title: 'Out of Stock!',
        text: 'This product is currently out of stock and cannot be added to the cart.',
        icon: 'warning',
        confirmButtonText: 'Close',
        
      });
      return; // الخروج مبكرًا إذا كان المخزون 0
    }

    setLoading(true); // بدء التحميل
    try {
      const userId = localStorage.getItem("userI");
      const response = await axios.post('http://localhost:3001/api/cart/addtocart', {
        product_id: productId,
        quantity,
        user_id: userId,
      });
      console.log('Product added to cart:', response.data);

      // عرض رسالة نجاح SweetAlert
      Swal.fire({
        title: 'Product Added to Cart!',
        text: 'Your skincare product has been successfully added to the cart.',
        icon: 'success',
        timer: 5000, // الإغلاق التلقائي بعد 5 ثوانٍ
        timerProgressBar: true,
        imageUrl: 'https://content.presentermedia.com/files/animsp/00007000/7277/stick_figure_shopping_cart_lg_wm.gif',
        imageHeight: 200, // ارتفاع الصورة
        imageAlt: 'Skincare Product',
        background: '#f4f4f9', // خلفية بيضاء ناعمة
        color: 'black', // لون النص
        confirmButtonColor: '#4CAF50', // لون أخضر لزر التأكيد
      });
      
    } catch (error) {
      console.error('Error adding to cart:', error);

      // عرض تنبيه خطأ إذا كان هناك مشكلة
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add product to cart. Please try again.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } finally {
      setLoading(false); // إنهاء التحميل
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
            {/* قسم صورة المنتج */}
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

            {/* قسم تفاصيل المنتج */}
            <div className="lg:w-1/2 p-8 ">
              {product.stock === 0 && (
                <div className="mb-6 bg-red-50 border-l-4 border-[red] border-red-400 p-4 rounded-r-lg flex items-start ">
                  <div className="flex-shrink-0 ">
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
                <div className="mb-6 bg-yellow-50 border-l-4 border-[red] border-yellow-400 p-4 rounded-r-lg flex items-start ">
                  <div className="flex-shrink-0 ">
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
                    onClick={() => addToCart(product.id, quantity)}
                    className={`w-full bg-greenRoot text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-greenRoot/90 transition ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading || product.stock === 0} // تعطيل الزر عند التحميل أو إذا كان المخزون 0
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

        {/* قسم المنتجات التي قد تعجبك أيضًا */}
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
