import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import dr4 from '../../assets/dr4.jpg';
import { Link, useLocation } from 'react-router-dom'; 

function Experts() {
  const [skinConcern, setSkinConcern] = useState('');
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const skinConcernParam = queryParams.get('skinConcern');
    
    if (skinConcernParam) {
      setSkinConcern(skinConcernParam);
      fetchExperts(skinConcernParam);
    } else {
      setError('Skin concern not specified in the URL');
      setLoading(false);
    }
  }, [location.search]);

  const fetchExperts = async (skinConcern) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/experts/skin-concern?skinConcern=${skinConcern}`);
      setExperts(response.data);
      setLoading(false);
      
      // Store the expert ID(s) in local storage
      if (response.data.length > 0) {
        // Assuming you want to store the ID of the first expert
        const expertId = response.data[0].id; // Get the ID of the first expert
        localStorage.setItem('expertId', expertId); // Store the ID in local storage
      }
    } catch (error) {
      setError('Error fetching experts');
      setLoading(false);
    }
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <section className="py-8 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
          <h2 className="font-manrope font-bold text-4xl text-black text-center mb-11">
            Recommended Drs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {experts.map(expert => (
              <div key={expert.id} className="bg-grayRoot p-4 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                  <img
                    src={expert.profile_picture || dr4} 
                    alt={expert.name}
                    className="w-32 h-32 rounded-full mb-4"
                  />
                  <div className="text-center">
                    <h3 className="font-medium text-lg mb-2">Name : {expert.name}</h3>
                    <p className="text-gray-600 mb-2">Specialty : {expert.specialty}</p>
                    <p className="text-gray-600 mb-2">Location : {expert.location}</p>
                    
                    <button
                      type="submit"
                      className="w-full md:w-36 border text-grayRoot bg-greenRoot text-sm p-1.5 rounded-lg mt-4 hover:bg-greenRoot hover:text-white"
                    >
                      <Link to="/Appointment">Book Now</Link>
                    </button>

                    <div className="flex justify-center gap-3 mt-4">
                      {expert.facebook_url && (
                        <a
                          href={expert.facebook_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded bg-[#1877f2] px-4 py-2 text-xs font-medium text-white shadow-md hover:shadow-lg"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 320 512"
                            className="h-4 w-4"
                          >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                          </svg>
                        </a>
                      )}
                      {expert.instagram_url && (
                        <a
                          href={expert.instagram_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded bg-[#c13584] px-4 py-2 text-xs font-medium text-white shadow-md hover:shadow-lg"
                        >
                          <span className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg
                              fill="currentColor"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </span>
                        </a>
                      )}
                      {expert.whatsapp_url && (
                        <a
                          href={expert.whatsapp_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded bg-[#25d366] px-4 py-2 text-xs font-medium text-white shadow-md hover:shadow-lg"
                        >
                          <span className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg
                              fill="currentColor"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M380.3 97.3c-64.3 0-117.7 53.4-117.7 117.7s53.4 117.7 117.7 117.7 117.7-53.4 117.7-117.7c0-64.3-53.4-117.7-117.7-117.7zm0 179.2c-34.2 0-61.5-27.3-61.5-61.5s27.3-61.5 61.5-61.5 61.5 27.3 61.5 61.5-27.3 61.5-61.5 61.5zm54.8-95.2c3.1-3.1 3.1-8.1 0-11.2l-22.8-22.8c-3.1-3.1-8.1-3.1-11.2 0l-9.3 9.3c-19.4-14.2-43.4-21.6-70-21.6-53.5 0-97.2 43.7-97.2 97.2 0 12.7 2.5 24.7 7.2 35.7l-37.6 37.6c-18.4-7.2-38.3-12-60.1-12-13.7 0-26.8 2.1-39.5 5.8-3.6 1.2-7.3 2.4-11 3.6-3.6 1.2-7.3 2.4-11 3.6-21.5 7.4-40.1 17.9-56.1 31.7-4.7 4.1-4.8 10.9-.2 14.7 3.9 4.1 10.9 4.2 14.7.2 26.4-23.6 60.7-37.3 98.7-37.3 79.9 0 143.8 63.9 143.8 143.8 0 9.9-1 19.5-3 28.9 10.8-11.7 19.4-25.5 26.4-40.5 11.8-20.2 18.5-43.3 18.5-67.5 0-55.1-22.8-105.3-59.5-142z" />
                            </svg>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experts;
