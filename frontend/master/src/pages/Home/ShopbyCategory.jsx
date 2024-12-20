import React from 'react'
import moist from '../../assets/moist.jpg';
import sunblock from '../../assets/sunblock.jpg';
import mask from '../../assets/mask.jpg';
import serum from '../../assets/serum.jpg';
function ShopbyCategory() {
  return (
    <div>
       <section>
      <>
        {/* component */}
        <div className="flex justify-center items-center bg-grayRoot">
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
          <div className="sm:mx-auto sm:container py-12 px-4 sm:px-6 xl:px-20 sm:px-0 w-full">
            <div className="flex flex-col jusitfy-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                  Shop By Category
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-[900px]">
                <div className="relative group flex justify-center items-center">
                  <img
                    className="object-cover "
                    src={moist}
                    alt="girl-image"
                  />
                 
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center bg-greenRoot">
                    <img
                      className="object-cover"
                      src={serum}
                      alt="shoe-image"
                    />
                   
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                  <div className="relative group flex justify-center items-center bg-pinkRoot">
                    <img
                    
                      className="object-cover "
                      src={sunblock}
                      alt="watch-image"
                    />
                    
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                </div>
                <div className="relative group justify-center items-center  hidden lg:flex">
                  <img
                    className=" object-cover "
                    src={mask}
                    alt="girl-image"
                  />
                  
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                
                
                 
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              
               
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </>
      </section>
    </div>
  )
}

export default ShopbyCategory;
