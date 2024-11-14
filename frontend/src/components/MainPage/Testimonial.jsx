import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from 'react-icons/fa'; // Correctly import FaStar from react-icons
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSection = ({ name, title, quote, rating }) => {
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Handle half star if rating is a decimal

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-500" />
      );
    }

    // Add half star if necessary
    if (halfStars) {
      stars.push(
        <FaStar key="half" className="text-yellow-500" style={{ opacity: 0.5 }} />
      );
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - halfStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-purple-300 flex items-center justify-center text-purple-800 text-2xl font-bold mr-4">
          {name.slice(0, 1)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-800">{name}</h3>
          <p className="text-purple-600">{title}</p>
        </div>
      </div>
      {/* Rating display */}
      <div className="mt-2 flex">{renderStars(rating)}</div>
      <p className="mt-4 text-gray-800 italic">"{quote}"</p>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Example Company',
      quote: 'The service at Vini Resort was exceptional. The staff went above and beyond to ensure our stay was comfortable.',
      rating: 5, // 5 stars
    },
    {
      name: 'Jane Smith',
      title: 'Blogger',
      quote: 'I had an amazing experience at Vini Resort. The amenities were top-notch, and the views were breathtaking.',
      rating: 4.5, // 4.5 stars
    },
    {
      name: 'Bob Johnson',
      title: 'Traveler',
      quote: 'Vini Resort is a hidden gem. The location is stunning, and the rooms are spacious and well-appointed.',
      rating: 3, // 3 stars
    },
    
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
          What Our Guests Say
        </h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <TestimonialSection {...testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
