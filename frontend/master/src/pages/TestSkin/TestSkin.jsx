import React from 'react'
import brusher from '../../assets/brusher.png';
import girl from '../../assets/girl.png';
import { Link } from 'react-router-dom';



function TestSkin() {
  return (
    <div>
  <div className="flex ">
    <div className="flex-1 w-64">
      <p className='d' >
        Want to improve your skincare routine? Find out your skin type first with our personalized skin test!
      </p>
    </div>
    <div className="flex-1 w-32">
      <img className='' src={brusher} />
      <img className='girl'
        alt=""
        src={girl}
      />
    </div>
  </div>
  <button   type="button" className="ms-72 mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
  
  <Link
  to="/Test"
  className="w-[10%] text-grayRoot border border-gray-300 text-md p-3 rounded-lg -ml-4 bg-greenRoot hover:text-white mt-3"
>
    Start Test
    </Link>
  </button>

</div>
  )
}

export default TestSkin;
