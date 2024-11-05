import React, { useState, useEffect } from 'react';
import drOnline from '../../assets/drOnline.jpg';
import bookNow from '../../assets/bookNow.jpg';
import consultation from '../../assets/consultation.gif';
import axios from 'axios';
import Swal from 'sweetalert2';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FaCreditCard , FaMoneyBill  } from 'react-icons/fa';

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-10">
      <p className="font-serif text-xl font-bold text-blue-900">Select Payment Method</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <button
          type="button"
          className={`flex items-center justify-center border-grayRoot rounded-lg bg-white px-4 py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
            paymentMethod === 'PayPal'
              ? 'border-4 border-emerald-600 bg-emerald-100'
              : 'border-4 border-transparent'
          }`}
          onClick={() => setPaymentMethod('PayPal')}
        >
          <FaCreditCard  className="mr-3 text-emerald-600" />
          <span className="font-medium">PayPal</span>
        </button>
        <button
          type="button"
          className={`flex items-center justify-center border-grayRoot rounded-lg bg-white px-4 py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
            paymentMethod === 'Cash'
              ? 'border-4 border-grayRoot'
              : 'border-4 border-grayRoot'
          }`}
          onClick={() => setPaymentMethod('Cash')}
        >
          <FaMoneyBill  className="mr-3 text-emerald-600" />
          <span className="font-medium">Cash</span>
        </button>
      </div>
    </div>
  );
};

function Appointment() {
  const [serviceType, setServiceType] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [expertId, setExpertId] = useState(null);
  const [userI, setUserId] = useState(null);
  const [timeSlot, setTimeSlot] = useState('');
  const [minDate, setMinDate] = useState('');
  const [showPayPal, setShowPayPal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  useEffect(() => {
    const fetchedExpertId = localStorage.getItem('expertId');
    const fetchedUserId = localStorage.getItem('userI');

    if (fetchedExpertId) setExpertId(fetchedExpertId);
    if (fetchedUserId) setUserId(fetchedUserId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expertId || !userI) {
      alert('Expert ID or User ID not found.');
      return;
    }

    if (paymentMethod === 'PayPal') {
      setShowPayPal(true);
    } else if (paymentMethod === 'Cash') {
      handleCashPayment();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Payment Method Required',
        text: 'Please select a payment method.',
      });
    }
  };

  const handlePaymentSuccess = async (details) => {
    try {
      const response = await axios.post('http://localhost:3001/api/appointments/book', {
        expert_id: expertId,
        user_id: userI,
        session_date: sessionDate,
        session_type: serviceType,
        time: timeSlot,
        payment_id: details.id,
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          text: 'Your appointment has been successfully booked.',
          confirmButtonText: 'Great!',
          imageUrl: consultation,
          imageWidth: 100,
          imageHeight: 100,
          background: 'white',
          color: '#155724',
          iconColor: '#155724',
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
        iconColor: '#721c24',
      });
    }
  };

  const handleCashPayment = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/appointments/book', {
        expert_id: expertId,
        user_id: userI,
        session_date: sessionDate,
        session_type: serviceType,
        time: timeSlot,
        payment_id: 'CASH',
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          text: 'Your appointment has been successfully booked with cash payment.',
          confirmButtonText: 'Great!',
          imageUrl: consultation,
          imageWidth: 100,
          imageHeight: 100,
          background: 'white',
          color: '#155724',
          iconColor: '#155724',
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
        iconColor: '#721c24',
      });
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const day = new Date(selectedDate).getDay();
    if (day === 5 || day === 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Date!',
        text: 'Weekends are not available for booking.',
        confirmButtonText: 'OK',
      });
      setSessionDate('');
    } else {
      setSessionDate(selectedDate);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative border-8 border-grayRoot  mx-auto mt-20 mb-3 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 ml-8 px-8 text-3xl font-bold text-white md:text-5xl ">
            Book An Appointment
          </h1>
          <img className="absolute top-0 left-0 -z-10 w-[260px] h-[340px] object-cover" src={bookNow} alt="Book Now" />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20 border-8 border-grayRoot">
          <form onSubmit={handleSubmit}>
            {/* Service type selection */}
            <div>
              <p className="font-serif text-xl font-bold text-blue-900 mt-12">Select a service</p>
              <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                {['Online', 'Onsite'].map((type) => (
                  <div key={type} className="relative bg-grayRoot">
                    <input
                      id={`radio_${type}`}
                      className="peer hidden"
                      type="radio"
                      name="service_type"
                      value={type}
                      onChange={(e) => setServiceType(e.target.value)}
                      required
                    />
                    <label
                      htmlFor={`radio_${type}`}
                      className="flex h-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-500 peer-checked:bg-emerald-600 peer-checked:text-white"
                    >
                      <span className="mt-2 font-medium">{type}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Date selection */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mt-20 font-serif text-xl font-bold text-blue-900">Select a date</p>
                <input
                  type="date"
                  className="block w-full rounded-lg border p-2.5"
                  value={sessionDate}
                  onChange={handleDateChange}
                  min={minDate}
                  required
                />
              </div>
              <img src={consultation} className="w-50% h-full" alt="Consultation" />
            </div>

            {/* Time selection */}
            <div>
              <p className="-mt-20 font-serif text-xl font-bold text-blue-900">Select a time</p>
              <p>please notice that these time slots are in 'pm'</p>
              <div className="mt-4 grid grid-cols-4 gap-4 w-[450px] lg:max-w-xl bg-grayRoot">
                {['09:00', '12:00', '14:00'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`rounded-lg px-4 py-2 ${timeSlot === time ? 'bg-emerald-700 text-white' : 'bg-emerald-100'}`}
                    onClick={() => setTimeSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment method selection */}
            <PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

            {/* Conditional PayPal button */}
            {showPayPal && (
              <div className="mt-8">
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons
                    createOrder={(data, actions) => actions.order.create({ purchase_units: [{ amount: { value: "50.00" } }] })}
                    onApprove={(data, actions) => actions.order.capture().then(handlePaymentSuccess)}
                  />
                </PayPalScriptProvider>
              </div>
            )}

            {/* Submit button */}
            <div className="mt-10 flex justify-center">
              <button type="submit" className="px-8 py-4 bg-greenRoot text-grayRoot rounded-lg">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;




























































// import React, { useState, useEffect } from 'react';
// import drOnline from '../../assets/drOnline.jpg';
// import bookNow from '../../assets/bookNow.jpg';
// import consultation from '../../assets/consultation.gif';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// function Appointment() {
//   const [serviceType, setServiceType] = useState('');
//   const [sessionDate, setSessionDate] = useState('');
//   const [expertId, setExpertId] = useState(null);
//   const [userI, setUserId] = useState(null);
//   const [timeSlot, setTimeSlot] = useState('');
//   const [minDate, setMinDate] = useState(''); // For setting the minimum date

//   // Set today's date as the minimum selectable date
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setMinDate(today); // Set the minDate for the calendar input
//   }, []);

//   useEffect(() => {
//     const fetchedExpertId = localStorage.getItem('expertId');
//     const fetchedUserId = localStorage.getItem('userI');

//     if (fetchedExpertId) setExpertId(fetchedExpertId);
//     if (fetchedUserId) setUserId(fetchedUserId);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!expertId || !userI) {
//       alert('Expert ID or User ID not found.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/appointments/book', {
//         expert_id: expertId,
//         user_id: userI,
//         session_date: sessionDate,
//         session_type: serviceType,
//         time: timeSlot,
//       });

//       if (response.status === 201) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Appointment Booked!',
//           text: 'Your appointment has been successfully booked.',
//           confirmButtonText: 'Great!',
//           imageUrl: consultation,
//           imageWidth: 100,
//           imageHeight: 100,
//           background: 'white',
//           color: '#155724',
//           iconColor: '#155724',
//         });
//       }
//     } catch (error) {
//       console.error('Error creating appointment:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed!',
//         text: 'Failed to create appointment. this time already booked ,please choose another date or time.',
//         confirmButtonText: 'Retry',
//         background: 'white',
//         color: '#721c24',
//         iconColor: '#721c24',
//       });
//     }
//   };

//   // Disable weekends (Saturday and Sunday)
//   const disableWeekend = (date) => {
//     const day = new Date(date).getDay();
//     return day === 0 || day === 6;
//   };

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     if (disableWeekend(selectedDate)) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Invalid Date!',
//         text: 'Weekends are not available for booking.',
//         confirmButtonText: 'OK',
//       });
//       setSessionDate(''); // Reset the date
//     } else {
//       setSessionDate(selectedDate);
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="w-full">
//          <div className="relative border-8 border-grayRoot mx-auto mt-20 mb-3 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
//           <h1 className="mt-2 ml-8 px-8 text-3xl font-bold text-white md:text-5xl">
//             Book An Appointment
//           </h1>
//           <img
//             className="absolute top-0 left-0 -z-10 w-[260px] h-[340px] object-cover"
//             src={bookNow}
//             alt="Book Now"
//           />
//         </div>

//         <div className="mx-auto grid max-w-screen-lg px-6 pb-20 border-8 border-grayRoot">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <p className="font-serif text-xl font-bold text-blue-900 mt-12">
//                 Select a service
//               </p>
//               <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
//                 <div className="relative bg-grayRoot">
//                   <input
//                     className="peer absolute opacity-12 my-10 ml-20"
//                     id="radio_online"
//                     type="radio"
//                     name="service_type"
//                     value="Online"
//                     onChange={(e) => setServiceType(e.target.value)}
//                     required
//                   />
//                   <label
//                     className="flex h-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-500 hover:text-white peer-checked:bg-emerald-600 peer-checked:text-white"
//                     htmlFor="radio_online"
//                   >
//                     <span className="mt-2 font-medium">On-Line</span>
//                   </label>
//                 </div>

//                 <div className="relative bg-grayRoot">
//                   <input
//                     className="peer absolute opacity-12 my-10 ml-20"
//                     id="radio_onsite"
//                     type="radio"
//                     name="service_type"
//                     value="Onsite"
//                     onChange={(e) => setServiceType(e.target.value)}
//                     required
//                   />
//                   <label
//                     className="flex h-full cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-500 hover:text-white peer-checked:bg-emerald-600 peer-checked:text-white"
//                     htmlFor="radio_onsite"
//                   >
//                     <span className="mt-2 font-medium text-emerald-900 peer-checked:text-white">
//                       On-Site
//                     </span>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <p className="mt-20 font-serif text-xl font-bold text-blue-900">
//                   Select a date
//                 </p>
//                 <div className="relative mt-4 w-56">
//                   <input
//                     type="date"
//                     className="block w-full rounded-lg border p-2.5 text-emerald-800"
//                     value={sessionDate}
//                     onChange={handleDateChange}
//                     min={minDate} // Prevent selecting past dates
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <img src={consultation} className="w-50% h-full" alt="Consultation" />
//               </div>
//             </div>

//             <div>
//               <p className="-mt-20 font-serif text-xl font-bold text-blue-900">
//                 Select a time
//               </p>
//               <div className="mt-4 grid grid-cols-4 gap-4 lg:max-w-xl">
//                 {['12:00', '14:00', '09:00'].map((time) => (
//                   <button
//                     key={time}
//                     type="button"
//                     className={`rounded-lg px-4 py-2 font-medium ${
//                       timeSlot === time ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'
//                     }`}
//                     onClick={() => setTimeSlot(time)}
//                   >
//                     {time}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-[25%] text-grayRoot bg-greenRoot border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-greenRoot hover:text-white mt-8"
//             >
//               Book Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

