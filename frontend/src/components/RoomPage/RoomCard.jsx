import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 max-w-sm mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      </div>

      {/* Room Name Under the Image */}
      <div className="p-4 bg-white">
        {/* Room Name with Fixed Height and Underline */}
        <h3 className="text-xl font-semibold text-gray-800 text-center mt-4 mb-4 py-2 px-4 rounded-md bg-white h-14 flex items-center justify-center border-b-2 border-gray-300">
          {room.name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-3 text-gray-700 text-sm mt-3">
          {room.features.map((feature, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow-sm border border-indigo-300"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Facilities */}
        <div className="mt-3">
          <h4 className="text-lg font-semibold text-indigo-600">Facilities:</h4>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
            {room.facilities.map((facility, index) => (
              <li
                key={index}
                className="bg-green-200 text-green-700 px-3 py-1 rounded-lg shadow-sm hover:bg-green-300 transition-all"
              >
                {facility}
              </li>
            ))}
          </ul>
        </div>

        {/* Guests Info */}
        <div className="mt-3 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center">
            <span className="font-semibold text-indigo-600">Adults:</span>
            <span className="ml-2">{room.guests.adults}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-indigo-600">Children:</span>
            <span className="ml-2">{room.guests.children}</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">${room.price} / night</span>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
