import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { UserCircle, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ profile_picture: "" });
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userI');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile();
      fetchCartItemCount();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/getusers/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cart/${userId}/items`);
      setCartItemCount(response.data.itemCount || 0);
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3001/api/users/logout');
      localStorage.removeItem('userI');
      sessionStorage.removeItem('token');
      Cookies.remove('token');
      setIsLoggedIn(false);
      setUser({ profile_picture: "" });
      setCartItemCount(0);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full start-0 dark:border-gray-600">
      <div className="headerImg"></div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img className="h-24 md:h-20" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <ul className="flex items-center space-x-8 rtl:space-x-reverse">
            <li>
              <Link to="/" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Home</Link>
            </li>
            <li>
              <Link to="/About" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">About</Link>
            </li>
            <li>
                  <Link to="/Flipbook" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Magazine</Link>
                </li>
            <li>
                  <Link to="/Contact" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Contact</Link>
            </li>
            {isLoggedIn && (
              <>
                <li>
                  <select id="services-dropdown" onChange={(e) => navigate(e.target.value)} className="block py-2 text-gray-900 hover:bg-gray-100 dark:text-white">
                    <option value="">Choose Service</option>
                    <option value="/Search">Search</option>
                    <option value="/Consuult1">Consultation</option>
                    <option value="/Cart">Delivery</option>
                  </select>
                </li>
               
                <li>
                  <Link to="/TestSkin" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Test Skin</Link>
                </li>
                <li>
                  <Link to="/Bazar" className="block py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Bazar</Link>
                </li>
              
              </>
            )}
          </ul>
        </div>

        <div className="flex space-x-3 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/UserProfile" className="text-gray-800 hover:text-blue-600 flex items-center">
                <img
                  src={user.profile_picture || "/api/placeholder/100/100"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border-2 border-white mr-2 shadow-lg"
                />
              </Link>

              <Link to="/cart" className="text-gray-800 hover:text-blue-600 flex items-center relative group">
                <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <button onClick={handleLogout} className="px-4 py-2 text-white hover:text-[red] bg-blue-600 rounded hover:bg-blue-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" className="text-grayRoot bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2">
                <Link to="/Login">Login</Link>
              </button>
              <button type="button" className="text-grayRoot bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                <Link to="/Reg">Register</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
