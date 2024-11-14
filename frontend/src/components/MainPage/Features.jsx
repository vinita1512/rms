import React from 'react';
import { FaBed, FaUtensils, FaSwimmingPool } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaBed className="text-6xl text-white mb-4" />,
      title: 'Comfortable Rooms',
      description: 'Relax in our cozy and comfortable rooms.',
      detailedDescription: 'Our rooms are designed to provide you with the utmost comfort, featuring plush bedding and modern amenities.',
      bgColor: 'bg-purple-600',
    },
    {
      id: 2,
      icon: <FaUtensils className="text-6xl text-white mb-4" />,
      title: 'Fine Dining',
      description: 'Enjoy exquisite cuisine at our restaurants.',
      detailedDescription: 'Experience gourmet dining with a variety of international cuisines prepared by top chefs.',
      bgColor: 'bg-green-600',
    },
    {
      id: 3,
      icon: <FaSwimmingPool className="text-6xl text-white mb-4" />,
      title: 'Pool & Spa',
      description: 'Unwind and rejuvenate at our pool and spa facilities.',
      detailedDescription: 'Rejuvenate your senses with our luxurious pool and spa treatments, designed for your relaxation.',
      bgColor: 'bg-blue-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 border rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              aria-label={feature.title}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${feature.bgColor}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-700 mb-2 text-center">{feature.description}</p>
              <p className="text-gray-600 text-center">{feature.detailedDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
