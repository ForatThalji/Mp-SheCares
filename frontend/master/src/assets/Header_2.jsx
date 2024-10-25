// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";

// import {Link } from "react-router-dom";
// import Contact from '../pages/Contact/Contact';

// function Header() {
//   return (

//     <div >
        
//       <div className='headerImg'></div>

//       <nav className=" dark:bg-gray-900   w-full  border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 p-4">
  
//             <div
//             className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-fixed"
//             >
//                  {/* <li >
                  
               
//                 <button type="button" class="btnLog px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
// <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
// <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
// </svg>
// Base
// </button>
// </li> */}
//             <ul className=" flex flex-col p-4 md:p-0 mt-1 font-medium border  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li >
//                     <a href="./Home.jsx">
//                 <img src={logo} width={120} />
//                 </a>
//                 </li>
//                 <div className='ulnav flex flex-row p-4 md:p-0 mt-1 font-medium border  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
//                 <li>
//           <NavLink to="/Login" className="active" exact>
//             Login
//           </NavLink>
//         </li>
//                 <li>
//                 <a
//                     href="#"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                     Services
//                 </a>
//                 </li>
//                 <li>
//                 <a
//                     href="#"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                     Magzine
//                 </a>
//                 </li>
//                 <li>
//                 <a
//                     href="#"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                     Contact
//                 </a>
//                 </li>
//                 </div>
//             </ul>

//             </div>

//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header



import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header_2() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <div>
      
     <div className='headerImg'></div>


<nav className="bg-white dark:bg-gray-900  w-full start-0 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
    <img className='h-24' src={logo} width={120} />
     
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="text-white bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Link 
        to="/Reg">
        User
        </Link>
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to="/Home"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
            </Link>
        </li>
       
        <li >
            <select
              id="services-dropdown"
              onChange={handleChange}
              className="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services
              <option value="">Choose Service</option>
              <option value="/Search">Search</option>
              <option value="/Consuult1">Consultation</option>
              <option value="/Cart">Delivery</option>
            </select>
          </li>
        <li>
          <Link
            to="/Flipbook"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Magazine
            </Link>
        </li>
        <li>
         <Link
            to="/TestSkin"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Test Skin
            </Link>
        </li>
        
        <li>
          <Link
            to="/Contact"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header_2;










