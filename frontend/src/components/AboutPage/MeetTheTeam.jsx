import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../../assets/johnsmith.jfif";
import img2 from "../../assets/emilyjohnson.jfif";
import img3 from "../../assets/businesswoman-posing.avif"; // Add the new images
import img4 from "../../assets/pexels-fauxels-3184611.jpg";
import img5 from "../../assets/portrait-smiling-businesswoman-office.jpg";
import img6 from "../../assets/pexels-lubomir-satko.jpg";
import img7 from "../../assets/confident-pretty-business-woman-with-arms-crossed.jpg";

const teamMembers = [
  {
    name: "John Smith",
    role: "General Manager",
    bio: "John has over 15 years of experience in hospitality management, ensuring every guest feels at home.",
    imageUrl: img1,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
    },
  },
  {
    name: "Emily Johnson",
    role: "Head Chef",
    bio: "Emily brings creativity and passion to our dining experiences, specializing in gourmet cuisine.",
    imageUrl: img2,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      instagram: "https://instagram.com/emilyjohnson",
    },
  },
  {
    name: "Sarah Lee",
    role: "Marketing Director",
    bio: "With a decade of experience in strategic marketing, Sarah crafts campaigns that elevate our brand and connect with our guests.",
    imageUrl: img3,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sarahlee",
      twitter: "https://twitter.com/sarahlee",
      instagram: "https://instagram.com/sarahlee",
    },
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Michael ensures that every detail of our resort runs smoothly. His operational expertise guarantees an impeccable experience for our guests.",
    imageUrl: img4,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      instagram: "https://instagram.com/michaelchen",
    },
  },
  {
    name: "Sophia Patel",
    role: "Spa & Wellness Manager",
    bio: "Sophia designs wellness programs that rejuvenate both body and mind. Her expertise in holistic therapies creates a truly relaxing experience.",
    imageUrl: img5,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sophiapatel",
      twitter: "https://twitter.com/sophiapatel",
      instagram: "https://instagram.com/sophiapatel",
    },
  },
  {
    name: "David Brown",
    role: "Guest Relations Manager",
    bio: "David is committed to making every guest feel like royalty. He leads our guest services team with warmth and attention to detail.",
    imageUrl: img6,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/davidbrown",
      twitter: "https://twitter.com/davidbrown",
      instagram: "https://instagram.com/davidbrown",
    },
  },
  {
    name: "Aisha Gomez",
    role: "Events Coordinator",
    bio: "Aisha brings creativity and precision to every event she organizes, from weddings to corporate retreats. Her goal is to make every occasion memorable.",
    imageUrl: img7,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aishagomez",
      twitter: "https://twitter.com/aishagomez",
      instagram: "https://instagram.com/aishagomez",
    },
  },
];

const MeetTheTeam = () => (
  <div className="my-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
      Meet the Team
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image Container */}
          <div className="w-full h-56 flex items-center justify-center overflow-hidden">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{member.role}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {member.socialLinks.instagram && (
                <a
                  href={member.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MeetTheTeam;
