import React from 'react';
import buyremove from "../../assets/buyremove.png";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <section id="hero" className="mx-44 mb-16">
        <div className="container text-center w-20px">
          <div className="row">
            <div className="heroTxt">
              <p>
                Through us, you can make Beauty a part of your day.
              </p> 
            </div>
            <div className="heroImg">
              <img
                alt="Beauty"
                src={buyremove}
              />
            </div>
          </div>

          <div>
            <button className="flex items-center justify-center mx-28 my-1 bg-greenRoot rounded hover:bg-red-600 px-5 py-4 text-sm text-grayRoot">
              <Link
                to="/Products"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Let's Discover
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
