import React from 'react';
import { ArrowDownCircle, Heart, ShieldCheck, Coins } from 'lucide-react';
import {Link} from 'react-router-dom';
import HandMadeProducts from '../Cart/Cart';
export default function Bazar() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.pinimg.com/564x/87/72/f7/8772f7ab9cd477af093af3eaf6f1b645.jpg')",
            backgroundSize: 'cover',
            opacity:.7,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6" >Welcome to</h1>
          <h1 className="text-3xl md:text-6xl font-bold mb-6">She Cares Bazar</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join our community at She Cares Bazar, where we offer a unique collection of handmade skincare products to make your skin glow with beauty.          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-greenRoot text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                <Link to="/Cart">
              Show products
              </Link>
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            <Link to="/AddRequest">
            join us as a seller
            </Link>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownCircle className="text-white w-8 h-8" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Coins className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p className="text-gray-600">By choosing us, you support a community of passionate sellers dedicated to promoting sustainable beauty and empowering local artisans</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handmade with Love</h3>
              <p className="text-gray-600">Each product is carefully handcrafted, reflecting our commitment to artisanal craftsmanship and unique skincare solutions..</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We prioritize the use of natural, high-quality ingredients to ensure your skin receives the best care possible.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mr-[80px] md:flex-row items-center">
            <div className="md:w-1/2  mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://i.pinimg.com/564x/87/72/f7/8772f7ab9cd477af093af3eaf6f1b645.jpg" 
                alt="About Us" 
                className="rounded-lg shadow-lg ml-[100px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
              We are also committed to giving back to the community. A portion of our proceeds is donated to initiatives that support artisans and promote sustainability, helping to create a positive impact on the environment and the lives of those we serve. Join us in celebrating natural beauty and making a difference, one product at a time
              </p>
              <p className="text-gray-600 mb-8">
              At She Cares Bazar, we celebrate the rich scents and benefits of nature, harnessing the goodness of natural ingredients to enhance your skincare experience. Each product is crafted with love and care, ensuring that you receive only the best for your skin..
              Welcome to She Cares Bazar, where we believe in the power of nature and the magic of handmade products. Our journey began with a vision to support natural products and empower the talented individuals behind them. We are dedicated to promoting sustainable beauty by providing a platform for artisans who pour their passion and creativity into every item they create.
              </p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}