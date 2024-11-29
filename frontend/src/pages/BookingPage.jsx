import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Added useParams import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import react-toastify styles

import img1 from "../assets/deluxe1.jpg"; // Sample Image
import img2 from "../assets/deluxe2.jpg"; // Sample Image

// Sample room data
const roomData = [
  {
    id: 1,
    name: "Luxury Suite",
    image: img1,
    features: ["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofas"],
    price: 250,
  },
  {
    id: 2,
    name: "Ocean View Room",
    image: img2,
    features: ["1 Room", "1 Bathroom", "1 Balcony", "2 Sofas"],
    price: 180,
  },
];

const BookingPage = () => {
  const { roomId } = useParams(); // Get room ID from URL params
  const navigate = useNavigate(); // To navigate to other pages

  const [room, setRoom] = useState(null); // Store selected room
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    mobile: "",
    address: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [isRoomAvailable, setIsRoomAvailable] = useState(true); // Room availability flag

  useEffect(() => {
    // Find the room based on roomId in the URL params
    const foundRoom = roomData.find((r) => r.id === parseInt(roomId));
    if (foundRoom) {
      setRoom(foundRoom);
    } else {
      navigate("/home"); // Navigate to home if room is not found
    }
  }, [roomId, navigate]);

  // Handle input changes for booking details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if the room is available for the selected dates
  const checkRoomAvailability = () => {
    // Example logic for availability: let's assume availability is random (50% chance)
    const isAvailable = Math.random() > 0.5;
    setIsRoomAvailable(isAvailable);
  };

  // Validate check-in and check-out dates
  const validateDates = () => {
    const { checkInDate, checkOutDate } = bookingDetails;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (!checkInDate || !checkOutDate) {
      toast.error("Both check-in and check-out dates are required.");
      return false;
    }

    if (checkOut <= checkIn) {
      toast.error("Check-out date must be after check-in date.");
      return false;
    }

    return true;
  };

  // Handle form submission (booking)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDates() && isRoomAvailable) {
      toast.success("Booking confirmed! Redirecting to payment...");
      setTimeout(() => {
        // Pass room details along with price when navigating to the payment page
        navigate(`/payment/${roomId}`, {
          state: {
            roomPrice: room.price,
            roomName: room.name, // Pass room name
            checkInDate: bookingDetails.checkInDate, // Pass check-in date
            checkOutDate: bookingDetails.checkOutDate, // Pass check-out date
          },
        });
      }, 2000); // Delay to let the success toast show
    } else if (!isRoomAvailable) {
      toast.error("Sorry, the room is not available for the selected dates.");
    }
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-indigo-900 mb-6">
          Book Your Stay at {room.name}
        </h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          <div className="lg:w-full sm:w-full">
            <div className="w-full rounded-lg overflow-hidden shadow-md mb-4 transition-all transform hover:scale-105 duration-500 ease-in-out">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-60 object-cover rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-800">
                {room.name}
              </h2>
              <div className="flex items-center space-x-3 mt-3">
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-green-600">
                    Rs. {room.price}
                  </span>{" "}
                  per night
                </p>
                <span className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-full">
                  Best Value
                </span>
              </div>

              <ul className="mt-4 text-gray-700 space-y-3">
                {room.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12l5 5L20 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mt-6 lg:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Enter Your Booking Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={bookingDetails.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={bookingDetails.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-600"
                    htmlFor="checkInDate"
                  >
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={bookingDetails.checkInDate}
                    onChange={(e) => {
                      handleInputChange(e);
                      checkRoomAvailability();
                    }}
                    required
                    className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-600"
                    htmlFor="checkOutDate"
                  >
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={bookingDetails.checkOutDate}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white rounded-xl text-lg hover:bg-indigo-700"
                >
                  {isRoomAvailable ? "Book Now" : "Room Unavailable"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingPage;
