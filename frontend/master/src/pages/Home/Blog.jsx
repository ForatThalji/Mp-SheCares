import React from 'react'
import purble from '../../assets/purble.jpg';
import routine from '../../assets/routine.jpg';
import vegitables from '../../assets/vegitables.jpg';
import makeup from '../../assets/makeup.jpg';

function Blog() {
  return (
    <div>
      <section className="max-w-[75rem]  mx-auto px-4 py-10 mb-4 sm:px-6 lg:px-8 lg:py-14">
        <h2 className="text-white sm:text-4xl text-sm font-bold text-center mb-16">
          From Our Blog
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="#"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 ">
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
          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="#"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={purble}
                  alt="Blog Image"
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
          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="#"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={vegitables}
                  alt="Blog Image"
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
          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="#"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={routine}
                  alt="Blog Image"
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
        </div>
      </section>
    </div>
  )
}

export default Blog;