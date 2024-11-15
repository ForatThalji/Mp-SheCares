import React from 'react'

function WhyUs() {
  return (
    <div>
       {/* why us  */}
       <section className=" text-gray-700 body-font ">
          <div className="flex justify-center  mt-20 text-3xl font-bold text-gray-800 text-center mb-4">
            <p className='mt-12 text-3xl xl:text-4xl   font-semibold leading-7 text-center xl:leading-9 text-gray-800 dark:text-white'>
            Why Us?
            </p>
           
          </div>
          <div className="container py-12 ">
            <div className="flex flex-wrap text-center justify-center mx-44">
             
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      className="w-32 mb-3 mx-12"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Reasonable Rates
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Time Efficiency
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Expertise in Industry
                  </h2>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default WhyUs;
