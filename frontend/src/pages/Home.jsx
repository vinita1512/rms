import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarousel from "../components/MainPage/ImageCarousel";
import img1 from "../assets/movie-night-by-pool-whole-family.jpg";
import img2 from "../assets/relax-area-resort.jpg";
import img3 from "../assets/silhouette-palm-tree-with-umbrella.jpg";
import BookingWidget from "../components/MainPage/BookingWidget";
import Cards from "../components/MainPage/Cards";
import Testimonial from "../components/MainPage/Testimonial";
import { FaBed, FaUtensils, FaSwimmingPool } from 'react-icons/fa';
const featuresData = [
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
const Home = () => {
  const images = [
    { src: img1, alt: "Resort image 1", legend: "Movie Night by the Pool" },
    { src: img2, alt: "Resort image 2", legend: "Relax Area at the Resort" },
    { src: img3, alt: "Resort image 3", legend: "Palm Tree Silhouette" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto py-12 px-4 text-center">
          <ImageCarousel images={images} />

          <div className="mt-8">
            <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Welcome to Our Resort
            </h1>
            <p className="text-xl text-white mb-8 max-w-xl mx-auto drop-shadow-md">
              Experience unparalleled luxury and make unforgettable memories.
            </p>
            <button className="bg-blue-700 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-800 transition duration-300 shadow-md">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Widget Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <BookingWidget />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Features</h2>
          <Cards  cardData={featuresData}/>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-gray-200 to-gray-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
