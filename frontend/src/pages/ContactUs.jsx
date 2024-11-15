import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-300 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We would love to hear from you! Reach out to us for any inquiries, 
          feedback, or just to say hello. Our team is ready to assist you.
        </p>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto transform transition-transform hover:scale-105">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-lg font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-lg font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-lg font-medium text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Contact Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <FaEnvelope className="text-4xl" />
              <div>
                <p className="font-medium text-lg">Email</p>
                <p>contact@viniresort.com</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <FaPhoneAlt className="text-4xl" />
              <div>
                <p className="font-medium text-lg">Phone</p>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <FaMapMarkerAlt className="text-4xl" />
              <div>
                <p className="font-medium text-lg">Address</p>
                <p>Vini Resort, Beach Road, Malibu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
