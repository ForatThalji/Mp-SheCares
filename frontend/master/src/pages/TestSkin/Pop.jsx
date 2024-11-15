import React, { useState, useEffect } from 'react';
import quesremove from '../../assets/quesremove.png';
import test2 from '../../assets/test2.jpg';
import { Link } from 'react-router-dom';

function Pop() {
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [skinType, setSkinType] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsHidden(!isHidden);
    fetchSkinType();  // Fetch the skin type when the modal is opened
  };

  // Function to fetch the skin type from sessionStorage
  const fetchSkinType = () => {
    const score = sessionStorage.getItem("totalPoints");   
    
    let result = '';

    if (score) {
      const numericScore = parseInt(score, 10);
      if (numericScore >= 10 && numericScore < 15) {
        result = 'Dry';
      } else if (numericScore >= 15 && numericScore <= 20) {
        result = 'Oily';
      } else if (numericScore > 20 && numericScore <= 25) {
        result = 'Combination';
      } else {
        result = 'Normal';
      }
    } else {
      result = 'Unknown'; // Default in case the score is not available
    }

    setSkinType(result);
  };

  return (
    <div>
      <section className="dark:bg-gray-900" style={{ display: isHidden ? 'none' : 'block' }}>
        <div className="container mx-auto py-8 px-4 max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Let's Know What is Your Skin Type?!
            </h2>
            <p className="">
              This skin test is not 100% accurate, but it is based on advanced scientific studies and analyses to ensure reliable and comprehensive results. We provide this test as an initial tool to better understand your skin's condition. If you have any additional questions or wish to receive a detailed analysis, you can
              <Link to="../Consuult1" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                <span className="text-greenRoot">book a consultation.</span>
              </Link>
              To view the results and get more details, please click the following link.
            </p>
            <button
              className="-ml-1 mt-4 block text-grayRoot bg-greenRoot hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={toggleModal}
              type="button"
            >
              Show Result
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-2">
            <img className="w-full rounded-lg bg-grayRoot -mt-10" src={quesremove} alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={test2} alt="office content 2" />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="mt-34 mb-44 inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" onClick={toggleModal}>
          <div className="relative p-4 w-full max-w-2xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Skin Type is:</h3>
                <button
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto"
                  onClick={toggleModal}
                  type="button"
                >
                  <svg aria-hidden="true" className="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="relative flex w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg">
                <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="green" className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="ml-3 mr-12">
                  <h5 className="block font-sans text-xl antialiased font-normal leading-snug text-white">
                    <details>
                      <summary className="text-xl font-sans mb-4 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {skinType}
                      </summary>
                      <div className="px-4 pb-4">
                        {skinType === 'Dry' && (
                          <p>
                            Dry skin lacks moisture and natural oils, which can make it appear dull and sometimes flaky. People with dry skin may experience tightness or itching, and their skin may be more prone to showing wrinkles and fine lines. To maintain healthy dry skin, it's important to use rich moisturizers and avoid products with harsh ingredients.
                          </p>
                        )}
                        {skinType === 'Oily' && (
                          <p>
                            Oily skin produces more sebum than necessary, often resulting in a shiny appearance and potential breakouts. It's important to use skincare products that balance the skin's oil production without over-drying it.
                          </p>
                        )}
                        {skinType === 'Combination' && (
                          <p>
                            Combination skin has areas of both dryness and oiliness, typically with an oily T-zone and drier cheeks. It's important to use products that target both concerns.
                          </p>
                        )}
                        {skinType === 'Normal' && (
                          <p>
                            Normal skin is well-balanced, neither too oily nor too dry, with few blemishes and an even skin tone. Maintaining a regular skincare routine is key.
                          </p>
                        )}
                        {skinType === 'Unknown' && <p>Unable to determine skin type. Please retake the test.</p>}
                      </div>
                    </details>
                  </h5>
                  <p className="block mt-2 font-sans text-base text-white">
                    This skin test is not 100% accurate, but it is based on advanced scientific studies.
                  </p>
                </div>
                <div>
                  <img className="w-[40%] mt-4 mx-auto" src={test2} alt="Skin type result" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pop;
