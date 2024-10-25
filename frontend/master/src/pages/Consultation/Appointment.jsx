import React, { useState, useEffect } from 'react';
import drOnline from '../../assets/drOnline.jpg';
import bookNow from '../../assets/bookNow.jpg';
import consultation from '../../assets/consultation.gif';
import axios from 'axios'; // To make API request
import Swal from 'sweetalert2';

function Appointment() {
  const [serviceType, setServiceType] = useState('');  // Session Type (Online/Onsite)
  const [sessionDate, setSessionDate] = useState('');  // Session Date
  const [expertId, setExpertId] = useState(null);      // Expert ID (set dynamically)
  const [userI, setUserId] = useState(null);          // User ID (set dynamically)
  const [timeSlot, setTimeSlot] = useState('');        // Time Slot

  // Fetch expertId and userId from local storage
  useEffect(() => {
    const fetchedExpertId = localStorage.getItem('expertId');
    const fetchedUserId = localStorage.getItem('userI');

    if (fetchedExpertId) setExpertId(fetchedExpertId);
    if (fetchedUserId) setUserId(fetchedUserId);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!expertId || !userI) {
      alert('Expert ID or User ID not found.');
      return;
    }

    try {
      // Post request to backend API to create the appointment
      const response = await axios.post('http://localhost:3001/api/appointments/book', {
        expert_id: expertId,
        user_id: userI,
        session_date: sessionDate,
        session_type: serviceType,
        time: timeSlot,  // Send selected time slot
      });
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          text: 'Your appointment has been successfully booked.',
          confirmButtonText: 'Great!',
          imageUrl: consultation, // Image URL to display
          imageWidth: 100,
          imageHeight: 100,
          background: 'white', // Custom background color
          color: '#155724', // Custom text color
          iconColor: '#155724', // Icon color
         
        });
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to create appointment. Please try again.',
        confirmButtonText: 'Retry',
        background: 'white',
        color: '#721c24',
        iconColor: '#721c24'
       
      });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative border-8 border-grayRoot mx-auto mt-20 mb-3 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 ml-8 px-8 text-3xl font-bold text-white md:text-5xl">
            Book An Appointment
          </h1>
          <img
            className="absolute top-0 left-0 -z-10 w-[260px] h-[340px] object-cover"
            src={bookNow}
            alt="Book Now"
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20 border-8 border-grayRoot">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="font-serif text-xl font-bold text-blue-900 mt-12">
                Select a service
              </p>
              <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                <div className="relative bg-grayRoot">
                  <input
                    className="peer absolute opacity-12 my-10 ml-20"
                    id="radio_online"
                    type="radio"
                    name="service_type"
                    value="Online"
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                  />
                  <label
                    className="flex h-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-500 hover:text-white peer-checked:bg-emerald-600 peer-checked:text-white"
                    htmlFor="radio_online"
                  >
                    <span className="mt-2 font-medium">On-Line</span>
                  </label>
                </div>

                <div className="relative bg-grayRoot">
                  <input
                    className="peer absolute opacity-12 my-10 ml-20"
                    id="radio_onsite"
                    type="radio"
                    name="service_type"
                    value="Onsite"
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                  />
                  <label
                    className="flex h-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-500 hover:text-white peer-checked:bg-emerald-600 peer-checked:text-white"
                    htmlFor="radio_onsite"
                  >
                    <span className="mt-2 font-medium text-emerald-900 peer-checked:text-white">
                      On-Site
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mt-20 font-serif text-xl font-bold text-blue-900">
                  Select a date
                </p>
                <div className="relative mt-4 w-56">
                  <input
                    type="date"
                    className="block w-full rounded-lg border p-2.5 text-emerald-800"
                    value={sessionDate}
                    onChange={(e) => setSessionDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <img src={consultation} className="w-50% h-full" alt="Consultation" />
              </div>
            </div>

            <div>
              <p className="-mt-20 font-serif text-xl font-bold text-blue-900">
                Select a time
              </p>
              <div className="mt-4 grid grid-cols-4 gap-4 lg:max-w-xl">
                {['12:00', '14:00', '09:00'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`rounded-lg px-4 py-2 font-medium ${
                      timeSlot === time ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'
                    }`}
                    onClick={() => setTimeSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-[25%] text-grayRoot bg-greenRoot border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-greenRoot hover:text-white mt-8"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
