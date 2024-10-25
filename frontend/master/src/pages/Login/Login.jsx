import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reg from '../../assets/Reg.jpg';
import google from '../../assets/google.svg';
import Header_2 from '../../assets/Header_2.jsx'; // Update this import based on your file type
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [tokenMessage, setTokenMessage] = useState('');
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  // Function to get the value of a specific cookie by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password }, { withCredentials: true });
      // Handle successful login
      console.log(response.data);

      navigate('/Home');

      const userId = response.data.user.id; // Change this based on your API response structure
      
      localStorage.setItem('userI', userId); // Store the user ID in localStorage

      // Optionally redirect or handle further actions
    } catch (err) {
      // Handle error
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Check if token exists in cookies on component mount
  useEffect(() => {
    const token = getCookie('token'); // Assuming 'token' is the cookie name
    console.log("token from login = "+token)
    if (token) {
      setIsTokenPresent(true);
    } else {
      setIsTokenPresent(false);
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div> {isTokenPresent && (
           
      <Header_2 /> 
  
  )}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
         
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome back</span>
            
            {/* Display token message */}
            <div className="text-center text-blue-500 mb-4">{tokenMessage}</div>

            <form onSubmit={handleSubmit}>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  name="pass"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember for 30 days</span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button
                type="submit"
                className="w-full bg-greenRoot text-grayRoot p-2 border border-gray-300 rounded-lg mb-6 hover:bg-white hover:bg-greenRoot hover:text-black hover:border hover:border-gray-300"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
              <button
                type="button"
                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                onClick={() => (window.location.href = 'http://localhost:3001/api/users/users/google')}
              >
                <img src={google} alt="Google" className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>
              <div className="text-center text-gray-400">
                Don't have an account?
                <span className="font-bold text-black">Sign up for free</span>
              </div>
            </form>
          </div>
          <div className="relative">
            <img src={Reg} alt="Registration" className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover" />
            <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
