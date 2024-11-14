import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Reach Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Reach Us</h3>
            <p className="text-gray-300 mb-2">📍 Address: Vini Resort, Beach Road, Malibu</p>
            <p className="text-gray-300 mb-2">📧 Email: support@viniresort.com</p>
            <p className="text-gray-300 mb-2">📞 Phone: +1 234 567 890</p>
          </div>

          {/* Google Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.087479261797!2d-122.08424908468124!3d37.42199977982425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbd09188a8e5%3A0x179b050ac8b44d6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617793474159!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: "none" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Social Media & Footer Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>

            <div className="text-gray-300 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Vini Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
