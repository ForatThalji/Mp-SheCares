import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userI');

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>User Profile</title>

      <div className="max-w-4xl mx-auto p-5">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-6 text-white">
            <div className="flex items-center">
              <img
                src={user.profile_picture || "/api/placeholder/100/100"}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white mr-4 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold">{`${user.first_name} ${user.last_name}`}</h1>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="transition-transform duration-300 hover:scale-105">
                <p className="text-gray-600">First Name</p>
                <p className="font-semibold text-gray-800">{user.first_name}</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <p className="text-gray-600">Last Name</p>
                <p className="font-semibold text-gray-800">{user.last_name}</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <p className="text-gray-600">Phone Number</p>
                <p className="font-semibold text-gray-800">{user.phone_number}</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <p className="text-gray-600">Date of Birth</p>
                <p className="font-semibold text-gray-800">{new Date(user.date_of_birth).toLocaleDateString()}</p>
              </div>
              <div className="md:col-span-2 transition-transform duration-300 hover:scale-105">
                <p className="text-gray-600">Address</p>
                <p className="font-semibold text-gray-800">{user.address}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Recent Bookings</h2>
            <div className="space-y-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-600 transform  hover:scale-80"
                  >
                    <p className="font-semibold">Booking #{booking.id}</p>
                    <p className="text-sm text-gray-600">Date: {new Date(booking.session_date).toLocaleDateString()}</p>
                  </div>
                ))
              ) : (
                <p>No recent bookings available.</p>
              )}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Cart Information</h2>
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-100 transform hover:scale-80">
                    <p className="font-semibold">Item: {item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
