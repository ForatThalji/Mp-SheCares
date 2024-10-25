import React from 'react'
import { Link } from 'react-router-dom';


function Checkout() {
  return (
    <div className='mx-44'>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form
    action="#"
    className="mx-44 max-w-screen-xl px-4 2xl:px-0"
  >
    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="after:border-1 flex items-center text-greenRoot  after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg
            aria-hidden="true"
            className="me-2 h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <Link
            to="/Cart"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Cart
          </Link>
        </span>
      </li>
      <li className="after:border-1 flex items-center text-greenRoot  after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg
            aria-hidden="true"
            className="me-2 h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Checkout
        </span>
      </li>
      <li className="flex shrink-0 items-center">
        <svg
          aria-hidden="true"
          className="me-2 h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        Order summary
      </li>
    </ol>
    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Checkout Details
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="your_name"
              >
                {' '}Your name{' '}
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="your_name"
                placeholder="Bonnie Green"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="your_email"
              >
                {' '}Your email*{' '}
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="your_email"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="select-country-input-3"
                >
                  {' '}Country*{' '}
                </label>
              </div>
              <select
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="select-country-input-3"
              >
                <option selected>
                  United States
                </option>
                <option value="AS">
                  Australia
                </option>
                <option value="FR">
                  France
                </option>
                <option value="ES">
                  Spain
                </option>
                <option value="UK">
                  United Kingdom
                </option>
              </select>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="select-city-input-3"
                >
                  {' '}City*{' '}
                </label>
              </div>
              <select
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="select-city-input-3"
              >
                <option selected>
                  San Francisco
                </option>
                <option value="NY">
                  New York
                </option>
                <option value="LA">
                  Los Angeles
                </option>
                <option value="CH">
                  Chicago
                </option>
                <option value="HU">
                  Houston
                </option>
              </select>
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="phone-input-3"
              >
                {' '}Phone Number*{' '}
              </label>
              <div className="flex items-center">
                <button
                  className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  data-dropdown-toggle="dropdown-phone-3"
                  id="dropdown-phone-button-3"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="me-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 20 15"
                  >
                    <rect
                      fill="#fff"
                      height="14"
                      rx="2"
                      width="19.6"
                      y=".5"
                    />
                    <mask
                      height="15"
                      id="a"
                      maskUnits="userSpaceOnUse"
                      style={{
                        maskType: 'luminance'
                      }}
                      width="20"
                      x="0"
                      y="0"
                    >
                      <rect
                        fill="#fff"
                        height="14"
                        rx="2"
                        width="19.6"
                        y=".5"
                      />
                    </mask>
                    <g mask="url(#a)">
                      <path
                        clipRule="evenodd"
                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                        fill="#D02F44"
                        fillRule="evenodd"
                      />
                      <path
                        d="M0 .5h8.4v6.533H0z"
                        fill="#46467F"
                      />
                      <g filter="url(#filter0_d_343_121520)">
                        <path
                          clipRule="evenodd"
                          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                          fill="url(#paint0_linear_343_121520)"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_343_121520"
                        x1=".933"
                        x2=".933"
                        y1="1.433"
                        y2="6.1"
                      >
                        <stop stopColor="#fff" />
                        <stop
                          offset="1"
                          stopColor="#F0F0F0"
                        />
                      </linearGradient>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="5.667"
                        id="filter0_d_343_121520"
                        width="6.533"
                        x=".933"
                        y="1.433"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_343_121520"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_343_121520"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  +1
                  <svg
                    aria-hidden="true"
                    className="-me-0.5 ms-2 h-4 w-4"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <div
                  className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                  id="dropdown-phone-3"
                >
                  <ul
                    aria-labelledby="dropdown-phone-button-2"
                    className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    <li>
                      <button
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        type="button"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            className="me-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              fill="#fff"
                              height="14"
                              rx="2"
                              width="19.6"
                              y=".5"
                            />
                            <mask
                              height="15"
                              id="a"
                              maskUnits="userSpaceOnUse"
                              style={{
                                maskType: 'luminance'
                              }}
                              width="20"
                              x="0"
                              y="0"
                            >
                              <rect
                                fill="#fff"
                                height="14"
                                rx="2"
                                width="19.6"
                                y=".5"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                clipRule="evenodd"
                                d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                fill="#D02F44"
                                fillRule="evenodd"
                              />
                              <path
                                d="M0 .5h8.4v6.533H0z"
                                fill="#46467F"
                              />
                              <g filter="url(#filter0_d_343_121520)">
                                <path
                                  clipRule="evenodd"
                                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                  fill="url(#paint0_linear_343_121520)"
                                  fillRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_343_121520"
                                x1=".933"
                                x2=".933"
                                y1="1.433"
                                y2="6.1"
                              >
                                <stop stopColor="#fff" />
                                <stop
                                  offset="1"
                                  stopColor="#F0F0F0"
                                />
                              </linearGradient>
                              <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="5.667"
                                id="filter0_d_343_121520"
                                width="6.533"
                                x=".933"
                                y="1.433"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="1" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_343_121520"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_343_121520"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          United States (+1)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        type="button"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="me-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              fill="#fff"
                              height="14"
                              rx="2"
                              width="19.6"
                              y=".5"
                            />
                            <mask
                              height="15"
                              id="a"
                              maskUnits="userSpaceOnUse"
                              style={{
                                maskType: 'luminance'
                              }}
                              width="20"
                              x="0"
                              y="0"
                            >
                              <rect
                                fill="#fff"
                                height="14"
                                rx="2"
                                width="19.6"
                                y=".5"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                d="M0 .5h19.6v14H0z"
                                fill="#0A17A7"
                              />
                              <path
                                clipRule="evenodd"
                                d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                fill="#fff"
                                fillRule="evenodd"
                              />
                              <path
                                d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                                stroke="#DB1F35"
                                strokeLinecap="round"
                                strokeWidth=".667"
                              />
                              <path
                                clipRule="evenodd"
                                d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                fill="#E6273E"
                                fillRule="evenodd"
                              />
                            </g>
                          </svg>
                          United Kingdom (+44)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        type="button"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="me-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 20 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              fill="#fff"
                              height="14"
                              rx="2"
                              width="19.6"
                              y=".5"
                            />
                            <mask
                              height="15"
                              id="a"
                              maskUnits="userSpaceOnUse"
                              style={{
                                maskType: 'luminance'
                              }}
                              width="20"
                              x="0"
                              y="0"
                            >
                              <rect
                                fill="#fff"
                                height="14"
                                rx="2"
                                width="19.6"
                                y=".5"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                d="M0 .5h19.6v14H0z"
                                fill="#0A17A7"
                              />
                              <path
                                d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth=".667"
                              />
                              <path
                                clipRule="evenodd"
                                d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                fill="url(#paint0_linear_374_135177)"
                                fillRule="evenodd"
                              />
                              <path
                                clipRule="evenodd"
                                d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                fill="url(#paint1_linear_374_135177)"
                                fillRule="evenodd"
                              />
                              <path
                                clipRule="evenodd"
                                d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                fill="#fff"
                                fillRule="evenodd"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_374_135177"
                                x1="0"
                                x2="0"
                                y1=".5"
                                y2="7.5"
                              >
                                <stop stopColor="#fff" />
                                <stop
                                  offset="1"
                                  stopColor="#F0F0F0"
                                />
                              </linearGradient>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint1_linear_374_135177"
                                x1="0"
                                x2="0"
                                y1=".5"
                                y2="7.033"
                              >
                                <stop stopColor="#FF2E3B" />
                                <stop
                                  offset="1"
                                  stopColor="#FC0D1B"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          Australia (+61)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        type="button"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="me-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              fill="#fff"
                              height="14"
                              rx="2"
                              width="19.6"
                              y=".5"
                            />
                            <mask
                              height="15"
                              id="a"
                              maskUnits="userSpaceOnUse"
                              style={{
                                maskType: 'luminance'
                              }}
                              width="20"
                              x="0"
                              y="0"
                            >
                              <rect
                                fill="#fff"
                                height="14"
                                rx="2"
                                width="19.6"
                                y=".5"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                clipRule="evenodd"
                                d="M0 5.167h19.6V.5H0v4.667z"
                                fill="#262626"
                                fillRule="evenodd"
                              />
                              <g filter="url(#filter0_d_374_135180)">
                                <path
                                  clipRule="evenodd"
                                  d="M0 9.833h19.6V5.167H0v4.666z"
                                  fill="#F01515"
                                  fillRule="evenodd"
                                />
                              </g>
                              <g filter="url(#filter1_d_374_135180)">
                                <path
                                  clipRule="evenodd"
                                  d="M0 14.5h19.6V9.833H0V14.5z"
                                  fill="#FFD521"
                                  fillRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="4.667"
                                id="filter0_d_374_135180"
                                width="19.6"
                                x="0"
                                y="5.167"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="4.667"
                                id="filter1_d_374_135180"
                                width="19.6"
                                x="0"
                                y="9.833"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_374_135180"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_374_135180"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          Germany (+49)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        type="button"
                      >
                        <span className="inline-flex items-center">
                          <svg
                            className="me-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 20 15"
                          >
                            <rect
                              fill="#fff"
                              height="13.5"
                              rx="1.75"
                              stroke="#F5F5F5"
                              strokeWidth=".5"
                              width="19.1"
                              x=".25"
                              y=".75"
                            />
                            <mask
                              height="15"
                              id="a"
                              maskUnits="userSpaceOnUse"
                              style={{
                                maskType: 'luminance'
                              }}
                              width="20"
                              x="0"
                              y="0"
                            >
                              <rect
                                fill="#fff"
                                height="13.5"
                                rx="1.75"
                                stroke="#fff"
                                strokeWidth=".5"
                                width="19.1"
                                x=".25"
                                y=".75"
                              />
                            </mask>
                            <g mask="url(#a)">
                              <path
                                d="M13.067.5H19.6v14h-6.533z"
                                fill="#F44653"
                              />
                              <path
                                clipRule="evenodd"
                                d="M0 14.5h6.533V.5H0v14z"
                                fill="#1035BB"
                                fillRule="evenodd"
                              />
                            </g>
                          </svg>
                          France (+33)
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                    id="phone-input"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                {' '}Email{' '}
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="email"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="company_name"
              >
                {' '}Company name{' '}
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="company_name"
                placeholder="Flowbite LLC"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="vat_number"
              >
                {' '}VAT number{' '}
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                id="vat_number"
                placeholder="DE42313253"
                required
                type="text"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-greenRoot  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                type="submit"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14m-7 7V5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Add new address
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Payment
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="credit-card-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultChecked
                    defaultValue=""
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="credit-card"
                  >
                    {' '}Credit Card{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="credit-card-text"
                  >
                    Pay with your credit card
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="pay-on-delivery-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultValue=""
                    id="pay-on-delivery"
                    name="payment-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="pay-on-delivery"
                  >
                    {' '}Payment on delivery{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="pay-on-delivery-text"
                  >
                    +$15 payment processing fee
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="paypal-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultValue=""
                    id="paypal-2"
                    name="payment-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="paypal-2"
                  >
                    {' '}Paypal account{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="paypal-text"
                  >
                    Connect to your account
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Delivery Methods
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="dhl-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultChecked
                    defaultValue=""
                    id="dhl"
                    name="delivery-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="dhl"
                  >
                    {' '}$15 - DHL Fast Delivery{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="dhl-text"
                  >
                    Get it by Tommorow
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="fedex-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultValue=""
                    id="fedex"
                    name="delivery-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="fedex"
                  >
                    {' '}Free Delivery - FedEx{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="fedex-text"
                  >
                    Get it by Friday, 13 Dec 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    aria-describedby="express-text"
                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    defaultValue=""
                    id="express"
                    name="delivery-method"
                    type="radio"
                  />
                </div>
                <div className="ms-4 text-sm">
                  <label
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    htmlFor="express"
                  >
                    {' '}$49 - Express Delivery{' '}
                  </label>
                  <p
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    id="express-text"
                  >
                    Get it today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="voucher"
          >
            {' '}Enter a gift card, voucher or promotional code{' '}
          </label>
          <div className="flex max-w-md items-center gap-4">
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              id="voucher"
              placeholder=""
              required
              type="text"
            />
            <button
              className="flex items-center justify-center rounded-lg bg-greenRoot  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-greenRoot  dark:focus:ring-primary-800"
              type="button"
            >
               
              Apply
            </button>
          </div><Link to="/OrderRev" className="flex font-bold text-indigo-600 text-lg mt-10" href="#">
                      

                     Confirm Your Order
                      <svg className="fill-current ml-2 text-indigo-600 w-4" viewBox="0 0 448 512">
<path d="M313.941 296H12c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h301.941V169.941c0-21.382 25.851-32.09 40.971-16.971L440.971 239.029c9.373 9.373 9.373 24.569 0 33.941l-86.059 86.059c-15.119 15.119-40.971 4.411-40.971-16.971V296z" />
</svg>
                  </Link>
        </div>
        
      </div>
     
    </div>
  </form>
</section>
    </div>
  )
}

export default Checkout;
