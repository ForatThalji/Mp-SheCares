import React from 'react';
import { Link } from 'react-router-dom';
import test2 from '../../assets/test2.jpg';
import quesremove from '../../assets/quesremove.png';
function Test() {
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="mx-4 lg:mx-44 gap-8 items-center py-8 px-4 max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-2xl sm:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Do you Know Your Skin Type?!
            </h2>
            <p className="mb-4">
              Discover your natural beauty secret with your free skin test! We are here to help you understand your skin type and its specific needs. Take a moment to find out how you can benefit from your skincare with our special artists just for you.
            </p>
            <p className="mb-4">
              So it is Combination skin, oily or normal skin?
            </p>
            <p className="mb-6">To Know that, try Test skin!</p>
            <div>
              <button className="flex items-center justify-center w-full sm:w-auto bg-greenRoot rounded hover:bg-red-600 px-5 py-4 text-sm text-grayRoot">
                <Link
                  to="/Test"
                  className="block text-center w-full sm:w-auto py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Test Now
                </Link>
              </button>
            </div>
          </div>

          {/* الصور تظهر فقط على الشاشات الكبيرة */}
          <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg bg-grayRoot -mt-10"
              src={quesremove}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={test2}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;