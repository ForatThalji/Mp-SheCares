import React, { useState } from 'react';
import contact from '../../assets/contact.jpg';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve userId from localStorage
    const userId = localStorage.getItem('userI');

    try {
      const response = await axios.post('http://localhost:3001/api/contact/addmessage', {
        user_id:userId,  // Include the userId in the request
        email: formData.email,
        message: formData.message,
        status: 'pending', // Optional
      });
      setResponseMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('Failed to send the message.');
    }
  };

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 shadow-2xl">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src={contact}
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                  />
               <div className="absolute bottom-0 w-full p-5 lg:p-11">
  <div className="bg-white rounded-lg p-4 md:p-6 block">
    <a href="javascript:;" className="flex items-center mb-4 md:mb-6">
      <svg
        /* Phone Icon SVG */
        className="w-5 h-5 md:w-6 md:h-6 text-gray-500"
      ></svg>
      <h5 className="text-[white] text-sm md:text-base font-normal leading-5 md:leading-6 ml-3 md:ml-5">
        +962 793828985
      </h5>
    </a>
    <a href="javascript:;" className="flex items-center mb-4 md:mb-6">
      <svg
        /* Email Icon SVG */
        className="w-5 h-5 md:w-6 md:h-6 text-gray-500"
      ></svg>
      <h5 className="text-[white] text-sm md:text-base font-normal leading-5 md:leading-6 ml-3 md:ml-5">
        shecares@gmail.com
      </h5>
    </a>
    <a href="javascript:;" className="flex items-center">
      <svg
        /* Address Icon SVG */
        className="w-5 h-5 md:w-6 md:h-6 text-gray-500"
      ></svg>
      <h5 className="text-[white] text-sm md:text-base font-normal leading-5 md:leading-6 ml-3 md:ml-5">
        Jordan, Amman
      </h5>
    </a>
  </div>
</div>

                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <form onSubmit={handleSubmit}>
                <span className="mb-2 text-md">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 rounded-md shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Name"
                />
                <span className="mb-2 text-md">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Email"
                  required
                />
                <span className="mb-2 text-md">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Phone"
                />
                <span className="mb-2 text-md">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a message..."
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-5 text-white p-2 border border-gray-300 rounded-lg mb-6 hover:bg-white hover:bg-greenRoot hover:text-black hover:border hover:border-gray-300"
                >
                  Send
                </button>
              </form>
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
