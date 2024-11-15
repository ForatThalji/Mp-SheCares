import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cod from '../../assets/cod.png';
import { Link } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    user_id: '',
    payment_method: 'cash',
    card_holder_name: '',
    card_number: '',
    expiry_date: '',
    cvv: '',
    postal_code: '',
  });
  const [errors, setErrors] = useState({});
  const [showPayPalButton, setShowPayPalButton] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userI');
    if (storedUserId) {
      setFormData((prevData) => ({ ...prevData, user_id: storedUserId }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    if (name === 'payment_method') {
      setShowPayPalButton(value === 'paypal');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Validation logic...
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (paymentData) => {
    try {
      const response = await axios.post('http://localhost:3001/api/checkout/checkout', paymentData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Failed to process payment: ' + (error.response?.data.message || error.message));
    }
  };

  const handlePayPalSuccess = async (details) => {
    const paymentData = {
      user_id: formData.user_id,
      payment_method: 'paypal',
      orderID: details.id,
      amount: localStorage.getItem('totalPrice'),
    };
    await handlePayment(paymentData);
  };

  useEffect(() => {
    if (showPayPalButton) {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AYnzVEObmnyuNDN4FBPKSqinCbKh7UwO3m5qeUkH6R6wknTw0ECuqp63tmy714ZzsyutrUTHELbmbD9W&currency=USD";
      script.async = true;
      script.onload = () => {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: localStorage.getItem('totalPrice') } }], // Adjust this value based on your pricing logic
            });
          },
          onApprove: async (data, actions) => {
            const details = await actions.order.capture();
            handlePayPalSuccess(details);
          },
          onError: (err) => {
            console.error('PayPal Checkout onError', err);
            alert('An error occurred with your payment. Please try again. Error: ' + err.message);
          },
        }).render('#paypal-button-container');
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showPayPalButton]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const paymentData = {
      user_id: formData.user_id,
      payment_method: formData.payment_method,
      amount: '92.00', // Adjust the amount as needed
    };

    if (formData.payment_method === 'cash') {
      paymentData.card_holder_name = formData.card_holder_name;
      paymentData.card_number = formData.card_number;
      paymentData.expiry_date = formData.expiry_date;
      paymentData.cvv = formData.cvv;
      paymentData.postal_code = formData.postal_code;

      await handlePayment(paymentData);
    } else if (formData.payment_method === 'paypal') {
      alert('Please complete the payment through PayPal.');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="font-sans bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
            Checkout
          </h2>
        </div>
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-pinkRoot">01</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone number"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-greenRoot">02</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Shipping Address</h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-pinkRoot">03</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Payment method</h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    name="payment_method"
                    value="cash"
                    checked={formData.payment_method === 'cash'}
                    onChange={handleChange}
                  />
                  <label htmlFor="cash" className="ml-4 flex gap-2 cursor-pointer">
                    <img src={cod} className="w-[150px]" alt="card1" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    name="payment_method"
                    value="paypal"
                    checked={formData.payment_method === 'paypal'}
                    onChange={handleChange}
                  />
                  <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                    <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                  </label>
                  
                </div>
              </div>
          
              <div id="paypal-button-container"></div>
              {!showPayPalButton && (
                 <div className="flex justify-between items-center mt-8">
                 <Link
                   to="/"
                   className="inline-flex justify-center items-center px-6 py-3 border border-purple-600 text-[white] rounded-md bg-greenRoot hover:bg-greenRoot transition-colors"
                 >
                   Back to Home
                 </Link>
       
                 <button
                   
                   className="inline-flex justify-center items-center px-6 py-3 border border-purple-600 text-[white] rounded-md bg-[#0000FF] hover:bg-[#304bad] transition-colors"
                   type="submit"
                   onClick={handleSubmit}
                 >
                   Pay Now ({formData.payment_method === 'card' ? '$92.00' : ''})
                 </button>
               </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
