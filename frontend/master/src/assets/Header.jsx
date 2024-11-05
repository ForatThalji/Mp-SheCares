import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { UserCircle, ShoppingCart } from 'lucide-react';

import Login from '../pages/Login/Login'; // Update this import based on your file type

const userId = localStorage.getItem('userI');

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ profile_picture: "" }); // حالة لتخزين معلومات المستخدم
  const [cartItemCount, setCartItemCount] = useState(0); // حالة لتخزين عدد العناصر في السلة

  useEffect(() => {
    const token = localStorage.getItem('userI');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile(); // استدعاء دالة لجلب معلومات المستخدم
      fetchCartItemCount(); // استدعاء دالة لجلب عدد العناصر في السلة
    } else {
      setIsLoggedIn(false);
      
    }
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/getusers/${userId}`); // تأكد من تعديل هذا المسار ليتوافق مع مسار API الخاص بك
      setUser(response.data); // تحديث حالة المستخدم بالمعلومات المستلمة
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  // دالة لجلب عدد العناصر في السلة
  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cart/${userId}/items`); // استبدل هذا المسار بمسار API الصحيح لجلب عدد العناصر
      setCartItemCount(response.data.itemCount || 0); // تحديث عدد العناصر
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/logout');
      console.log(response.data.message);

      // إزالة التوكنات من التخزين
      localStorage.removeItem('userI');
      sessionStorage.removeItem('token');
      Cookies.remove('token');

      // تحديث الحالة لتكون غير مسجل الدخول
      setIsLoggedIn(false);
      setUser({ profile_picture: "" }); // إعادة تعيين حالة المستخدم
      setCartItemCount(0); // إعادة تعيين عدد العناصر في السلة

      // توجيه المستخدم إلى الصفحة الرئيسية
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      alert('فشل تسجيل الخروج. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div>
      <div className='headerImg'></div>
      <nav className="bg-white dark:bg-gray-900 w-full start-0 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         
          <Link to="/" >
                  <img
                   className='h-24' src={logo} width={100} alt="Logo"
                  />
                  
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            {isLoggedIn ? (
              <>
                <Link to="/UserProfile" className="text-gray-800 hover:text-blue-600 mr-4 flex items-center">
                  <img
                    src={user.profile_picture || "/api/placeholder/100/100"} // استخدم صورة الملف الشخصي الديناميكية أو صورة افتراضية
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-white mr-2 shadow-lg"
                  />
                  
                </Link>

                <Link to="/cart" className="text-gray-800 hover:text-blue-600 mr-4 flex items-center relative group">
                  <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
                 
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
                  <Link to="/">Register</Link>
                </button>
              </>
            )}
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Home</Link>
              </li>
              <li>
                <Link to="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">About</Link>
              </li>
              <li>
                <select id="services-dropdown" onChange={handleChange} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white">
                  <option value="">Choose Service</option>
                  <option value="/Search">Search</option>
                  <option value="/Consuult1">Consultation</option>
                  <option value="/Cart">Delivery</option>
                </select>
              </li>
              <li>
                <Link to="/Flipbook" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Magazine</Link>
              </li>
              <li>
                <Link to="/TestSkin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Test Skin</Link>
              </li>
              <li>
                <Link to="/Bazar" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Bazar</Link>
              </li>
              <li>
                <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
