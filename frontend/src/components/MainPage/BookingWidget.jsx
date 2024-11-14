import React, { useState } from "react";

const BookingWidget = () => {
  const [destination, setDestination] = useState("The LaLiT Mumbai");
  const [checkInDate, setCheckInDate] = useState("2024-05-26");
  const [checkOutDate, setCheckOutDate] = useState("2024-05-27");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Booking submitted successfully!");
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-lg p-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <label htmlFor="destination" className="block text-white font-semibold mb-2">
            Hotel or Destination
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border-2 border-white p-3 rounded-md focus:outline-none focus:border-opacity-0"
          />
        </div>
        <div className="w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
          <label htmlFor="checkInDate" className="block text-white font-semibold mb-2">
            Check-in
          </label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full border-2 border-white p-3 rounded-md focus:outline-none focus:border-opacity-0"
          />
        </div>
        <div className="w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
          <label htmlFor="checkOutDate" className="block text-white font-semibold mb-2">
            Check-out
          </label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full border-2 border-white p-3 rounded-md focus:outline-none focus:border-opacity-0"
          />
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <label htmlFor="guests" className="block text-white font-semibold mb-2">
            Guests
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-16 border-2 border-white p-3 rounded-md focus:outline-none focus:border-opacity-0"
            />
            <span className="mx-2 text-white">Adults</span>
            <input
              type="number"
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-16 border-2 border-white p-3 rounded-md focus:outline-none focus:border-opacity-0"
            />
            <span className="mx-2 text-white">Children</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          className={`bg-purple-600 text-white px-6 py-3 rounded-md w-full focus:outline-none ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
          }`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "CHECK AVAILABILITY"}
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
