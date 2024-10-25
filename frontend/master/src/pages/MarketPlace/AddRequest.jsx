import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

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
    status:"active"
    
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
        // The request was made and the server responded with a status code
        console.error("Error adding seller:", error.response.data);
      } else {
        console.error("Error adding seller:", error);
      }
    }
  };
  

  return (
    <div
      className="min-h-screen py-40"
      style={{
        backgroundColor: "#ecf0f1",
      }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl bg-[#E5FFE5] mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('images/Register-Background.png')",
            }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <p className="text-white">
              Unlock your potential and share your passion for handmade skincare!
              <a className="text-purple-500 font-semibold" href="#">
                Learn more
              </a>
            </p>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Add Request</h2>
            <p className="mb-4">Create your account. It’s free and only takes a minute.</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3"
                  name="first_name"
                  placeholder="Firstname"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3"
                  name="last_name"
                  placeholder="Lastname"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3 w-full"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3 w-full"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3 w-full"
                  name="address"
                  placeholder="Address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 rounded-lg py-2 px-3 w-full"
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
                  className="border border-gray-400 rounded-lg w-full py-2 px-3"
                  name="certificate"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Profile Picture:
                </label>
                <input
                  className="border border-gray-400 rounded-lg w-full py-2 px-3"
                  name="profile_image"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <button className="w-full bg-greenRoot rounded-lg py-3 text-white" type="submit">
                  Register Now
                </button>
              </div>

            </form>
            <Link to="/Loginasseller">or do you have a login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
