import React, { useState } from "react";

const AddRoomModal = ({ isOpen, onClose, onAddRoom }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    beds: "",
    status: "Available",
    description: "",
    facilities: [],
    image: null, // New field for image upload
  });

  // Limited facilities options: Wi-Fi, Air Conditioner, and TV
  const facilitiesOptions = ["Wi-Fi", "Air Conditioner", "TV"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newFacilities = checked
        ? [...prev.facilities, value]
        : prev.facilities.filter((facility) => facility !== value);
      return { ...prev, facilities: newFacilities };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data to be sent to parent component
    const roomData = { ...formData };
    roomData.facilities = formData.facilities.join(", "); // Convert facilities array to string

    // Send roomData to parent
    onAddRoom(roomData);

    // Reset the form after submission
    setFormData({
      name: "",
      type: "",
      price: "",
      beds: "",
      status: "Available",
      description: "",
      facilities: [],
      image: null,
    });

    onClose(); // Close modal after adding room
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg w-96 p-6 shadow-lg transform transition-all scale-105"
        role="dialog"
        aria-label="Add New Room"
      >
        <h2 className="text-lg font-bold mb-4">Add New Room</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Room Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter room name"
              value={formData.name}
              onChange={handleChange}
              className="w-full input"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Room Type</span>
            <input
              type="text"
              name="type"
              placeholder="Enter room type"
              value={formData.type}
              onChange={handleChange}
              className="w-full input"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Price</span>
            <input
              type="number"
              name="price"
              placeholder="Enter price per night"
              value={formData.price}
              onChange={handleChange}
              className="w-full input"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Beds</span>
            <input
              type="number"
              name="beds"
              placeholder="Enter number of beds"
              value={formData.beds}
              onChange={handleChange}
              className="w-full input"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Status</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full input"
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <textarea
              name="description"
              placeholder="Enter room description"
              value={formData.description}
              onChange={handleChange}
              className="w-full input"
            ></textarea>
          </label>

          {/* Facilities Checkbox Group */}
          <label className="block">
            <span className="text-gray-700">Facilities</span>
            <div className="grid grid-cols-2 gap-4">
              {facilitiesOptions.map((facility) => (
                <label key={facility} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={facility}
                    checked={formData.facilities.includes(facility)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{facility}</span>
                </label>
              ))}
            </div>
          </label>

          {/* Image Upload */}
          <label className="block">
            <span className="text-gray-700">Room Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full input"
            />
          </label>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="btn bg-gray-400 text-white"
            >
              Cancel
            </button>
            <button type="submit" className="btn bg-blue-600 text-white">
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomModal;
