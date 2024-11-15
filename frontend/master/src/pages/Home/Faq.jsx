import React from 'react';

function Faq() {
  return (
    <div>
      {/* FAQ */}
      <div className='bg-grayRoot'>
      <section className="text-gray-100 py-12 px-4 mx-16">
        <div className="container flex flex-col justify-center p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 font-semibold leading-7 text-center text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col divide-y divide-gray-700 sm:px-6 lg:px-16 xl:px-24">
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                How can I place an order?
              </summary>
              <div className="px-2 pb-4">
                <p>
                  You can easily place an order on our website by browsing our product
                  catalog, selecting the items you want, and adding them to your cart.
                  Then, proceed to checkout, where you can provide your shipping and
                  payment information to complete the order.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What payment methods do you accept?
              </summary>
              <div className="px-2 pb-4">
                <p>
                  We accept various payment methods, including credit cards, debit
                  cards, net banking, and mobile wallet payments. You can choose the
                  payment option that is most convenient for you during the checkout
                  process.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                How long does shipping take?
              </summary>
              <div className="px-2 pb-4">
                <p>
                  Shipping times may vary depending on your location and the shipping
                  method chosen. Typically, orders are processed within 1-2 business
                  days, and delivery can take 3-7 business days within India. You will
                  receive a tracking notification once your order is shipped.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Can I return a product if I'm not satisfied?
              </summary>
              <div className="px-2 pb-4">
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
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Do you offer international shipping?
              </summary>
              <div className="px-2 pb-4">
                <p>
                  Currently, we only provide shipping services within India. However,
                  we may consider expanding our shipping options to international
                  locations in the future. Please stay updated with our website for
                  any changes in shipping destinations.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What is your customer support contact?
              </summary>
              <div className="px-2 pb-4">
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
            <details className="group">
              <summary className="text-lg font-medium mb-2 text-gray-800 cursor-pointer group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                What are your terms and conditions?
              </summary>
              <div className="px-2 pb-4">
                <p>
                  You can find our detailed terms and conditions by visiting our{" "}
                  <a href="" className="underline">
                    Terms of Service
                  </a>{" "}
                  page on our website. It includes information about our policies,
                  user guidelines, and more.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Faq;
