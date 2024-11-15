import React from "react";
import Cards from "../components/MainPage/Cards";
import { FaGlobe, FaUsers, FaHandshake } from "react-icons/fa";
import MeetTheTeam from "../components/AboutPage/MeetTheTeam";

// Data for the Cards component
const aboutUsData = [
  {
    id: 1,
    icon: <FaGlobe className="text-6xl text-white mb-4" />,
    title: "Our Mission",
    description: "Connecting the world with luxury and comfort.",
    detailedDescription:
      "Our mission is to provide top-notch services while connecting guests to our beautiful locations worldwide.",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    icon: <FaUsers className="text-6xl text-white mb-4" />,
    title: "Our Team",
    description: "Dedicated and passionate professionals.",
    detailedDescription:
      "Our team is made up of hospitality experts dedicated to ensuring you have the best experience.",
    bgColor: "bg-orange-600",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-6xl text-white mb-4" />,
    title: "Our Values",
    description: "Commitment, Trust, Excellence.",
    detailedDescription:
      "We value trust and excellence in every interaction, committed to delivering high-quality service.",
    bgColor: "bg-yellow-600",
  },
];

// Timeline Data
const resortTimeline = [
  {
    year: "2005",
    event: "Vini Resort was established, opening its doors to guests from around the world.",
    icon: "🏨",
  },
  {
    year: "2010",
    event: "Expanded to include a world-class spa and wellness center.",
    icon: "💆‍♂️",
  },
  {
    year: "2015",
    event: "Launched our fine dining experience, featuring gourmet international cuisine.",
    icon: "🍽️",
  },
  {
    year: "2018",
    event: "Received the prestigious 'Best Luxury Resort' award.",
    icon: "🏆",
  },
  {
    year: "2023",
    event: "Initiated eco-friendly sustainability practices across the resort.",
    icon: "🌱",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-purple-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-md">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          At Vini Resort, we strive to provide an unforgettable experience for
          our guests. Our resort is equipped with luxurious rooms, fine dining
          options, and rejuvenating spa facilities to ensure your stay is as
          comfortable and enjoyable as possible. Discover what makes us unique!
        </p>

        {/* Using the Cards component to showcase resort features */}
        <Cards cardData={aboutUsData} />

        {/* Resort Timeline */}
        <div className="my-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Resort Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resortTimeline.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
              >
                <div className="w-16 h-16 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl mr-6">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-900">{item.year}</h3>
                  <p className="text-gray-700 mt-2">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet The Team Section */}
        <MeetTheTeam />
      </div>
    </div>
  );
};

export default AboutUs;
