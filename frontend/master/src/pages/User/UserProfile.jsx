import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Cake,
  Clock,
  Package,
  CreditCard,
  User
} from 'lucide-react';

const UserProfile = () => {
  // ... [Previous state and effect hooks remain the same]
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentBookingPage, setCurrentBookingPage] = useState(1);
  const [currentCartPage, setCurrentCartPage] = useState(1);
  const itemsPerPage = 3;
  
  const userId = localStorage.getItem('userI');

  // ... [All useEffect hooks and pagination logic remain the same]
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/getusers/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/appointments/gett/${userId}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userId]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/cart/getfromcart/${userId}/items`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const paginateData = (data, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const Pagination = ({ currentPage, setCurrentPage, totalItems }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-violet-100 disabled:opacity-50 text-violet-600 border border-violet-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <span className="px-4 py-2 text-sm font-medium text-violet-900">
           {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-violet-100 disabled:opacity-50 text-violet-600 border border-violet-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-greenRoot border-t-greenRoot"></div>
    </div>
  );
  
  if (error) return (
    <Alert variant="destructive" className="max-w-md mx-auto mt-8 border-2 border-greenRoot">
      <AlertTitle>{error}</AlertTitle>
    </Alert>
  );

  const paginatedBookings = paginateData(bookings, currentBookingPage);
  const paginatedCartItems = paginateData(cartItems, currentCartPage);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-greenRoot">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-6 py-8 text-white relative overflow-hidden border-b border-violet-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] opacity-70"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
              <div className="relative">
                <img
                  src={user.profile_picture || "/api/placeholder/100/100"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-pinkRoot shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-greenRoot w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <User className="w-6 h-6" />
                  {`${user.first_name} ${user.last_name}`}
                </h1>
                <p className="text-violet-100 mt-1 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="p-6 border-b border-violet-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-violet-500" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard 
                icon={<Phone className="w-5 h-5 text-violet-500" />}
                label="Phone Number" 
                value={user.phone_number} 
              />
              <InfoCard 
                icon={<Cake className="w-5 h-5 text-violet-500" />}
                label="Date of Birth" 
                value={new Date(user.date_of_birth).toLocaleDateString()} 
              />
              <InfoCard 
                icon={<MapPin className="w-5 h-5 text-violet-500" />}
                label="Address" 
                value={user.address} 
                className="md:col-span-2" 
              />
            </div>
          </div>

          {/* Bookings Section */}
          <div className="p-6 border-b border-violet-100">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-violet-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Recent Bookings</h2>
            </div>
            <div className="space-y-4">
              {paginatedBookings.length > 0 ? (
                paginatedBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 hover:from-violet-100 hover:to-purple-100 transition-colors border border-violet-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-violet-600 flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Booking #{booking.id}
                        </p>
                        <p className="text-gray-600 mt-1 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {new Date(booking.session_date).toLocaleDateString()}
                        </p>
                      </div>
                     
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4 border border-dashed border-violet-200 rounded-lg">No bookings available</p>
              )}
            </div>
            {bookings.length > itemsPerPage && (
              <Pagination
                currentPage={currentBookingPage}
                setCurrentPage={setCurrentBookingPage}
                totalItems={bookings.length}
              />
            )}
          </div>

          {/* Cart Section */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingCart className="w-6 h-6 text-violet-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
            </div>
            <div className="space-y-4">
              {paginatedCartItems.length > 0 ? (
                paginatedCartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 hover:from-violet-100 hover:to-purple-100 transition-colors border border-violet-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-violet-600 flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          {item.name}
                        </p>
                        <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-lg font-semibold text-violet-600 flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        {item.price} JOD
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4 border border-dashed border-violet-200 rounded-lg">Your cart is empty</p>
              )}
            </div>
            {cartItems.length > itemsPerPage && (
              <Pagination
                currentPage={currentCartPage}
                setCurrentPage={setCurrentCartPage}
                totalItems={cartItems.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value, className = '' }) => (
  <div className={`bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 hover:from-violet-100 hover:to-purple-100 transition-colors border border-violet-200 ${className}`}>
    <p className="text-gray-600 text-sm flex items-center gap-2">
      {icon}
      {label}
    </p>
    <p className="font-semibold text-gray-800 mt-1 ml-7">{value}</p>
  </div>
);

export default UserProfile;