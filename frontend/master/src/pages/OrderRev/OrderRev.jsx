import React from 'react'
import {Link} from 'react-router-dom';

function OrderRev() {
    const products = [
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image: './src/assets/cream.jpg',
          boycott: true
        },
        {
            name: "Face Moisturizer Face Moisturizer Face Moisturizer",
            skinType: "Dry",
            price: 50.0,
            description: "A rich moisturizer that helps hydrate and soften dry skin.",
            rating: 4.5,
            image: './src/assets/cream.jpg',
            boycott: true
          },
    ];
  return (
    <div className='mx-64 flex flex-row '>
      
      <div className="w-full border bg-grayRoot  sm:w-1/4 md:w-1/2 px-8 py-10" id="summary">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {products.length}</span>
                            <span className="font-semibold text-sm">${products.reduce((total, product) => total + product.price, 0)}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase" htmlFor="promo">Promo Code</label>
                            <input className="p-2 text-sm w-full" id="promo" placeholder="Enter your code" type="text" />
                        </div>
                        <button className="bg-greenRoot rounded hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${products.reduce((total, product) => total + product.price, 0) + 10}</span>
                            </div>
                           
                        </div>
                    </div>
                    <div className="mt-6 w-[50%] space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md mx-auto">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Subtotal
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $8,094.00
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-500">
                0
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $99
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                $199
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                $8,392.00
              </dd>
            </dl>
          </div>
        </div>
        <div className="space-y-3">
          <button
            className="flex w-full items-center justify-center rounded-lg bg-greenRoot  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-greenRoot  dark:focus:ring-primary-800"
            type="submit"
          > <Link
          to="/"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Confirm Order
          </Link>
          </button>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            One or more items in your cart require an account.{' '}
            <a
              className="font-medium text-greenRoot  underline hover:no-underline dark:text-primary-500"
              href="#"
              title=""
            >
              Sign in or create an account now.
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderRev;
