import React, { useState } from "react";
import RoomCard from "../components/RoomPage/RoomCard";
import img1 from "../assets/deluxe1.jpg";
import img2 from "../assets/deluxe2.jpg";

// Sample room data
const roomData = [
  {
    id: 1,
    name: "Luxury Suite",
    image: img1,
    features: ["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofas"],
    facilities: ["WiFi", "TV", "Air Conditioning"],
    guests: { adults: 5, children: 2 },
    price: 250,
  },
  {
    id: 2,
    name: "Ocean View Room",
    image: img2,
    features: ["1 Room", "1 Bathroom", "1 Balcony", "2 Sofas"],
    facilities: ["WiFi", "TV", "Mini Bar"],
    guests: { adults: 2, children: 1 },
    price: 180,
  },
  {
    id: 3,
    name: "Luxury Suite",
    image: img1,
    features: ["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofas"],
    facilities: ["WiFi", "TV", "Air Conditioning"],
    guests: { adults: 5, children: 2 },
    price: 250,
  },
  {
    id: 4,
    name: "Luxury Suite",
    image: img1,
    features: ["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofas"],
    facilities: ["WiFi", "TV", "Air Conditioning"],
    guests: { adults: 5, children: 2 },
    price: 250,
  },
  {
    id: 5,
    name: "Luxury Suite",
    image: img1,
    features: ["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofas"],
    facilities: ["WiFi", "TV", "Air Conditioning"],
    guests: { adults: 5, children: 2 },
    price: 250,
  },
  // Add more room data as needed
];

const RoomPage = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState(1); // Number of facilities to filter
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleFacilityChange = (e) => {
    setSelectedFacilities(Number(e.target.value)); // Convert the value to a number
  };

  const handleAdultsChange = (e) => {
    setAdults(Math.max(1, Number(e.target.value))); // Ensure at least 1 adult
  };

  const handleChildrenChange = (e) => {
    setChildren(Math.max(0, Number(e.target.value))); // Ensure no negative children
  };

  // Filter rooms based on selected filters
  const filteredRooms = roomData.filter((room) => {
    // Filter by selected number of facilities
    const hasSelectedFacilities = room.facilities.length >= selectedFacilities;

    // Filter by the number of guests
    const isValidGuests =
      room.guests.adults >= adults && room.guests.children >= children;

    return hasSelectedFacilities && isValidGuests;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-800 mb-8 text-center">
          Our Rooms
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Explore the variety of rooms at Vini Resort, each designed to offer a
          unique and luxurious experience. Find the perfect room for your stay.
        </p>

        {/* Layout for Filters and Room Cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 border border-gray-200 space-y-6 h-fit lg:sticky top-16 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-indigo-700">Filters</h2>

            {/* Check Availability */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-600">Check Availability</h3>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500" htmlFor="checkInDate">
                  Check-In Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500" htmlFor="checkOutDate">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Facilities Filter */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-600">Facilities</h3>
              <select
                value={selectedFacilities}
                onChange={handleFacilityChange}
                className="w-full p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={1}>One Facility</option>
                <option value={2}>Two Facilities</option>
                <option value={3}>Three Facilities</option>
              </select>
            </div>

            {/* Guests Filter */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-600">Guests</h3>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500" htmlFor="adults">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  value={adults}
                  onChange={handleAdultsChange}
                  min="1"
                  className="p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500" htmlFor="children">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  value={children}
                  onChange={handleChildrenChange}
                  min="0"
                  className="p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Room Cards Section */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)
            ) : (
              <div className="col-span-full text-center text-lg text-gray-700">
                No rooms available for the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
