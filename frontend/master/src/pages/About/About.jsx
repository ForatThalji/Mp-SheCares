import React from 'react';
import about from '../../assets/about.jpg'; // Ensure you import the about image
import { FileText, Users, Lightbulb, Heart, BookOpen, Star } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#f5eef8] rounded-lg shadow-sm hover:shadow-md transition-shadow ms-[44px]">
    <div className="bg-blue-500 p-3 rounded-full mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

export default function About() {
  const values = [
    {
      icon: FileText,
      title: "Social Responsibility",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Lightbulb,
      title: "Innovation and Research",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Heart,
      title: "Customer Commitment",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: BookOpen,
      title: "Our Story",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Star,
      title: "Our Values",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="mx-44 bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 ml-28 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-irish text-gray-900 sm:text-4xl">
                She Cares
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                At She Cares company, we believe in the power of nature to nurture your skin. Our mission is to provide high-quality skincare products made with natural ingredients, free from harsh chemicals and additives. We are passionate about helping you achieve radiant, healthy skin, and our products are designed to cater to all skin types and concerns. With a commitment to sustainability, we source our ingredients ethically and package them in eco-friendly materials. Our team of experts is dedicated to continuous innovation, ensuring that our products meet the highest standards of quality and efficacy. Join us on a journey to discover the best in skincare, because your skin deserves nothing but the best.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={about}
                alt="About Us Image"
                className="object-contain rounded-lg shadow-md w-[300px] ml-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-irish text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </section>
    </div>
  );
}
