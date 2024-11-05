import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import bazar2 from '../../assets/bazar2.jpg';

export default function AddRequest() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    profile_image: null,
    certificate: null,
    status: "active"
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:3001/api/seller/addseller", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error adding seller:", error.response.data);
      } else {
        console.error("Error adding seller:", error);
      }
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden border-2 ">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('images/Register-Background.png')",
            }}
          >
            <img 
              src={bazar2} 
              className="w-[380px] h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              alt="Marketplace"
            />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105">Join us now to grow your business!</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="first_name"
                  placeholder="First Name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="last_name"
                  placeholder="Last Name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="address"
                  placeholder="Address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 border-green-500 rounded-lg py-2 px-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="phone_number"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Certificate:
                </label>
                <input
                  className="border-2 border-green-500 rounded-lg w-full py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="certificate"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Profile Image:
                </label>
                <input
                  className="border-2 border-green-500 rounded-lg w-full py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  name="profile_image"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <button className="w-full bg-green-600 hover:bg-green-700 text-grayRoot rounded-lg bg-greenRoot py-3 font-semibold transition duration-200" type="submit">
                  Register Now
                </button>
              </div>
            </form>
            <Link to="/Loginasseller" className="text-blue-600 hover:underline mt-4 block">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
