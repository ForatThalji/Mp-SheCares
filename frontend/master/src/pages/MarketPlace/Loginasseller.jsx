import React from 'react';
import {Link} from 'react-router-dom'
function Loginasseller() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-pinkRoot from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-greenRoot shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
           <div className="divide-y divide-gray-200">
  <div className="py-8 text-base leading-6 space-y-4 text-gray-800 sm:text-lg sm:leading-7">
    <div className="relative">
      <input
        autoComplete="off"
        id="email"
        name="email"
        type="text"
        className="peer placeholder-green-500 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />
      <label
        htmlFor="email"
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        Email Address
      </label>
    </div>
    <div className="relative">
      <input
        autoComplete="off"
        id="password"
        name="password"
        type="password"
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
      />
      <label
        htmlFor="password"
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        Password
      </label>
    </div>
    <div className="relative">
      <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md px-6 py-2 hover:from-teal-500 hover:to-blue-500 transition-all duration-300">
        <Link to="/AddHandMadeProduct">
          Login
        </Link>
      </button>
    </div>
  </div>
</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Loginasseller;
