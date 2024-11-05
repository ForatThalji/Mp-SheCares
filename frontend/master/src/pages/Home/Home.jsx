import React from 'react';
import buyremove from "../../assets/buyremove.png";
import searching from '../../assets/searching.png';
import shipping from '../../assets/shipping.png';
import consultation from '../../assets/consultation.png';
import test2 from '../../assets/test2.jpg';
import quesremove from '../../assets/quesremove.png';
import moist from '../../assets/moist.jpg';
import sunblock from '../../assets/sunblock.jpg';
import mask from '../../assets/mask.jpg';
import serum from '../../assets/serum.jpg';
import pro from '../../assets/pro.jpg';
import purble from '../../assets/purble.jpg';
import routine from '../../assets/routine.jpg';
import vegitables from '../../assets/vegitables.jpg';
import makeup from '../../assets/makeup.jpg';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g4 from '../../assets/g4.jpg';
import g3 from '../../assets/g3.jpg';
import { Link } from 'react-router-dom';
import Header_2 from '../../assets/Header_2.jsx'; // Update this import based on your file type

// import ourServices from './src/assets/ourServices.png'


 
function Home() {
  return (
   
<div className=''>
  {/* hero */}<Header_2 />
      <section id="hero " className='mx-44 mb-16'>
  <div className="container text-center w-20px">

    <div className="row">
      <div className="heroTxt">
        <p>
          Through us ,you can make Beauty a part of your day.
        </p> 
      </div>
      <div className="heroImg">
        <img
          alt=""
          src= {buyremove}
        />
        
      </div>
      
      
    </div>

    
    <div  >
       <button  className="flex items-center justify-center mx-28 my-1 bg-greenRoot rounded hover:bg-red-600 px-5 py-4 text-sm text-grayRoot">
       <Link
            to="/Products"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
         Lets Discover
         </Link>
       </button>
    </div>
    
  </div>
      </section>
{/* services */}
      <section className='bg-grayRoot mb-12' >
            <div className="mx-44 font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white sm:text-4xl text-sm font-bold text-center mb-16">
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
  {/* skin Test */}
 
      <section className="dark:bg-gray-900">
        <div className=" mx-44 gap-16 items-center py-8 px-4  max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
             Do you Know Your Skin Type?!</h2>
            <p className="">
             Discover your natural beauty secret with your free skin test! We are here to help you understand your skin type and its specific needs. Take a moment to find out how you can benefit from your skin care with our special artists just for you. Consult our comprehensive care experts for personalized advice for effective and optimal care .
            </p>
            <p>
            So it is Combination skin, oily or normal skin? 
            </p>
            <p>To Know thhat try Test skin!</p>
            <div  >
       <button  className="flex items-center justify-center mx-18 my-4 bg-greenRoot rounded hover:bg-red-600 px-5 py-4 text-sm text-grayRoot">
       <Link
            to="/Test"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
         Test Now
         </Link>
       </button>
    </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
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
{/* by categ */}
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
{/* our blog */}
      <section>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] mx-44 px-4 py-10 mb-4 sm:px-6 lg:px-8 lg:py-14"> <h2 className="text-white sm:text-4xl text-sm font-bold text-center mb-16">
            From Our Blog
          </h2>
          {/* Grid */}
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {/* Card */}
            <a
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={makeup}
                    alt="Blog Image"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    Studio by Preline
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    Produce professional, reliable streams easily leveraging Preline's
                    innovative broadcast studio
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"

src={purble}                    alt="Blog Image"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    Skin & Vegitables
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    Optimize your in-person experience with best-in-class capabilities
                    like badge printing and lead retrieval
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
src={vegitables}                    alt="Blog Image"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    The complete guide to OKRs
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    How to make objectives and key results work for your company
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
src={routine}                    alt="Blog Image"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    People program models
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    Six approaches to bringing your People strategy to life
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>

      </section>
{/* Testimonials */}

  {/* component */}
  <section  className=" py-2 bg-grayRoot text-gray-700 body-font  ">
    
  <div className="flex flex-col items-center justify-center gap-8  mx-44">
  <h1 className="text-3xl xl:text-4xl mt-8 font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
  What they say ?!
          </h1>
    <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
    "I've never had my skin feel this soft and radiant—total game changer!"
    "These products transformed my skin overnight; I can't imagine my routine without them."
    </h1>
    <div className="flex items-center gap-4">
      <div className="rounded-full w-12 h-12 mb-4 bg-black overflow-hidden">
        <img src={pro} />
      </div>
      <div className="flex flex-col tracking-wider">
        <label className="text-gray-600 font-bold text-base">
          Ahlam Omar
        </label>
        <label className="text-gray-400 font-normal text-sm">
          
        </label>
      </div>
    </div>
  </div>

</section>

{/* gallery */}
<section className="mx-44 text-gray-700 body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallery
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div className="group relative">
            <img
src={g1}              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
src={g2}                alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
src={g4}                alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
src={g3}                alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          {/* Repeat this div for each image */}
        </div>
      </section>


 {/* why us  */}
      <section className=" text-gray-700 body-font bg-grayRoot">
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
  

{/* FAQ */}
<section className="text-gray-100 py-20  -mb-20   mx-44">
        <div className="container flex flex-col justify-center p-4 md:p-8 ">
        <h1 className="text-3xl xl:text-4xl -mt-4 mb-12 font-semibold leading-7 text-center xl:leading-9 text-gray-800 dark:text-white">
        Frequently Asked Questions
          </h1>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="text-xl font-sans text- mb-4 text-g group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                How can I place an order?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  You can easily place an order on our website by browsing our product
                  catalog, selecting the items you want, and adding them to your cart.
                  Then, proceed to checkout, where you can provide your shipping and
                  payment information to complete the order.
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What payment methods do you accept?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  We accept various payment methods, including credit cards, debit
                  cards, net banking, and mobile wallet payments. You can choose the
                  payment option that is most convenient for you during the checkout
                  process.
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                How long does shipping take?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Shipping times may vary depending on your location and the shipping
                  method chosen. Typically, orders are processed within 1-2 business
                  days, and delivery can take 3-7 business days within India. You will
                  receive a tracking notification once your order is shipped.
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Can I return a product if I'm not satisfied?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, we have a hassle-free return policy. If you are not satisfied
                  with your purchase, you can initiate a return within 30 days of
                  receiving the product. Please contact our customer support at{" "}
                  <a href="" className="underline">
                    example@gmail.com
                  </a>{" "}
                  for assistance.
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Do you offer international shipping?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Currently, we only provide shipping services within India. However,
                  we may consider expanding our shipping options to international
                  locations in the future. Please stay updated with our website for
                  any changes in shipping destinations.
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What is your customer support contact?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  If you have any questions, concerns, or need assistance, you can
                  reach our customer support team at 9911083755 during our business
                  hours, Monday to Saturday from 10 am to 6 pm. You can also contact
                  us via email at{" "}
                  <a href="" className="underline">
                    example@gmail.com
                  </a>
                  .
                </p>
              </div>
            </details>
            <details>
              <summary className="text-xl font-sans mb-4 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What are your terms and conditions?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  You can find our detailed terms and conditions by visiting our
                  <a href="" className="underline">
                    Terms of Service
                  </a>
                  page on our website. It includes information about our policies,
                  user guidelines, and more.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>

  
  
  )
}


export default Home;
