import React from 'react'
import searching from '../../assets/searching.png';
import shipping from '../../assets/shipping.png';
import consultation from '../../assets/consultation.png';
function Services() {
  return (
    <div>
       <section className='bg-grayRoot mb-12' >
            <div className="mx-44 font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-white sm:text-4xl text-lg font-bold text-center mb-16 sm:mb-8 mt-16 sm:mt-4">
  Discover What We Offer
</h2>


          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
            <div className="rounded-xl group p-8 text-center hover:bg-zinc-50  text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <img className="w-[200px] mx-auto " src={searching}/>
              <h3 className="text-xl font-semibold mb-3">Searching Products</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
               Find your needs through searching by category
              </p>
            </div>
            <div className="rounded-xl group p-8 text-center hover:bg-grayRoot  text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <img className="w-[450px] mx-auto my-2 " src={shipping}/><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 mb-6 inline-block"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000"
                  />
                  <path
                    d="M178 271.894 233.894 216 334 316.105"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-xl font-semibold mb-3">Shipping Products</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                  Ship Your Products Quickly and Easily
              </p>
            </div>
            <div className="rounded-xl group p-8 text-center hover:bg-grayRoot text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <img className="w-[270px] mx-auto " src={consultation}/>

              <h3 className="text-xl font-semibold mb-3">Cosmetic Consultaion</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
              Feel at Ease and Consult Your Doctor for Skincare
              </p>
            </div>
        
          </div>
        </div>
      </div>

      </section>
    </div>
  )
}

export default Services;
