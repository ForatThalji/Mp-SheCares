import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCartItems, addCartItem, updateCartItem, deleteCartItem } from '../../../../features/cartSlice';
import PayPalCheckoutButton from '../../Components/PayPalCheckoutButton';
import { FaShoppingCart, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const cartStatus = useSelector(state => state.cart.status);
  const cartError = useSelector(state => state.cart.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const cart_id = localStorage.getItem('userI');
    dispatch(fetchCartItems(cart_id));
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = safeCartItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(safeCartItems.length / itemsPerPage);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartItem({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPrice = safeCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <FaShoppingCart className="mr-2 text-pinkRoot" />
              Your Shopping Cart ({safeCartItems.length} items)
            </h1>
          </div>

          <div className="p-6">
            {cartStatus === 'loading' ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : cartStatus === 'failed' ? (
              <div className="text-red-500 text-center py-8">{cartError}</div>
            ) : currentItems.length > 0 ? (
              <div className="space-y-6">
                {currentItems.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center border-b pb-6">
                    <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
                      <img src={item.image_url} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <div className="sm:pl-6 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                          <p className="text-sm text-gray-500">{item.skinType}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FaTrash className='text-[red]' />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <label className="mr-2 text-gray-700">Quantity:</label>
                          <select
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            {[1, 2, 3, 4, 5].map(q => (
                              <option key={q} value={q}>{q}</option>
                            ))}

                          </select>

                        </div>
<div>

                        <p className="text-xl font-bold text-purple-600">${item.price}</p>
                        
                        <p className="text-lg  text-purple-600">{item.quantity} pc</p>

                      </div>
</div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center mt-6 space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                  >
                    <FaChevronLeft className="text-gray-600" />
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-8 h-8 rounded-full ${
                        currentPage === index + 1
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                  >
                    <FaChevronRight className="text-gray-600" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FaShoppingCart className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-xl text-gray-500">Your cart is empty</p>
              </div>
            )}
          </div>

          {safeCartItems.length > 0 && (
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">Total:</span>
                <span className="text-2xl font-bold text-purple-600">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/Products"
                  className="inline-flex justify-center items-center px-6 py-3 border border-purple-600 text-[white] rounded-md bg-greenRoot hover:bg-greenRoot transition-colors"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/Checkout"
                  className="inline-flex justify-center items-center px-6 py-3 bg-[#304bad] text-[white] rounded-md hover:bg-purple-700 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;






// ------------------------------ with design ------------------------------




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchCartItems, addCartItem, updateCartItem, deleteCartItem } from '../../../../features/cartSlice';
// import PayPalCheckoutButton from '../../Components/PayPalCheckoutButton';
// import { FaShoppingCart, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);
//   const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
//   const cartStatus = useSelector(state => state.cart.status);
//   const cartError = useSelector(state => state.cart.error);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     const cart_id = localStorage.getItem('userI');
//     dispatch(fetchCartItems(cart_id));
//   }, [dispatch]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = safeCartItems.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(safeCartItems.length / itemsPerPage);

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateCartItem({ id, quantity }));
//   };

//   const handleRemoveItem = (id) => {
//     dispatch(deleteCartItem(id));
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const totalPrice = safeCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300">
//       <div className="max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
//         <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-purple-100">
//           <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-50 animate-pulse"></div>
//             <h1 className="text-2xl font-bold text-white flex items-center relative z-10">
//               <FaShoppingCart className="mr-2 text-pink-300 animate-bounce" />
//               Your Shopping Cart 
//               <span className="ml-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm animate-scale">
//                 {safeCartItems.length}
//               </span>
//             </h1>
//           </div>

//           <div className="p-6">
//             {cartStatus === 'loading' ? (
//               <div className="flex justify-center items-center h-40">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             ) : cartStatus === 'failed' ? (
//               <div className="text-red-500 text-center py-8 animate-shake">{cartError}</div>
//             ) : currentItems.length > 0 ? (
//               <div className="space-y-6">
//                 {currentItems.map((item, index) => (
//                   <div key={index} className="flex flex-col sm:flex-row items-center border-b pb-6 hover:bg-purple-50 transition-colors duration-300 p-4 rounded-lg animate-slideIn">
//                     <div className="w-full sm:w-1/4 mb-4 sm:mb-0 overflow-hidden rounded-lg">
//                       <img src={item.image_url} alt={item.name} className="w-full h-48 object-cover rounded-lg transform hover:scale-110 transition-transform duration-300" />
//                     </div>
//                     <div className="sm:pl-6 flex-1">
//                       <div className="flex justify-between items-start mb-2">
//                         <div>
//                           <h2 className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors">{item.name}</h2>
//                           <p className="text-sm text-gray-500">{item.skinType}</p>
//                         </div>
//                         <button
//                           onClick={() => handleRemoveItem(item.id)}
//                           className="text-red-500 hover:text-red-700 transition-colors transform hover:scale-110 hover:rotate-12 transition-transform p-2"
//                         >
//                           <FaTrash />
//                         </button>
//                       </div>
//                       <div className="flex justify-between items-center mt-4">
//                         <div className="flex items-center">
//                           <label className="mr-2 text-gray-700">Quantity:</label>
//                           <select
//                             value={item.quantity}
//                             onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                             className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300"
//                           >
//                             {[1, 2, 3, 4, 5].map(q => (
//                               <option key={q} value={q}>{q}</option>
//                             ))}
//                           </select>
//                         </div>
//                         <div>
//                           <p className="text-xl font-bold text-purple-600 animate-pulse">${item.price}</p>
//                           <p className="text-lg text-purple-600">{item.quantity} pc</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="flex justify-center mt-6 space-x-2">
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="p-2 rounded-full bg-gray-200 hover:bg-purple-200 disabled:opacity-50 transition-colors duration-300 transform hover:scale-110"
//                   >
//                     <FaChevronLeft className="text-gray-600" />
//                   </button>
//                   {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110 ${
//                         currentPage === index + 1
//                           ? 'bg-purple-600 text-white animate-pulse'
//                           : 'bg-gray-200 text-gray-600 hover:bg-purple-200'
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}
//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="p-2 rounded-full bg-gray-200 hover:bg-purple-200 disabled:opacity-50 transition-colors duration-300 transform hover:scale-110"
//                   >
//                     <FaChevronRight className="text-gray-600" />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center py-12 animate-fadeIn">
//                 <FaShoppingCart className="mx-auto text-4xl text-gray-400 mb-4 animate-bounce" />
//                 <p className="text-xl text-gray-500">Your cart is empty</p>
//               </div>
//             )}
//           </div>

//           {safeCartItems.length > 0 && (
//             <div className="bg-gradient-to-r from-gray-50 to-purple-50 px-6 py-4">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-lg font-semibold text-gray-700">Total:</span>
//                 <span className="text-2xl font-bold text-purple-600 animate-pulse">${totalPrice.toFixed(2)}</span>
//               </div>
//               <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
//                 <Link
//                   to="/Products"
//                   className="inline-flex justify-center items-center px-6 py-3 border border-purple-600 text-white rounded-md bg-greenRoot hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//                 >
//                   Continue Shopping
//                 </Link>
//                 <Link
//                   to="/Checkout"
//                   className="inline-flex justify-center items-center px-6 py-3 bg-[#304bad] text-white rounded-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;