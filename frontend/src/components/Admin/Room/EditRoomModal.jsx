import React, { useState, useEffect } from 'react';

const EditRoomModal = ({ isOpen, onClose, room, onEditRoom }) => {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    price: '',
    quantity: '',
    adults: '',
    children: '',
    facilities: {
      wifi: false,
      airConditioner: false,
      tv: false,
    },
    description: '',
    image: null, // For the uploaded image
  });

  const [previewImage, setPreviewImage] = useState(null); // To preview uploaded image

  useEffect(() => {
    if (room) {
      setFormData({
        ...room,
        facilities: {
          wifi: room.facilities?.wifi || false,
          airConditioner: room.facilities?.airConditioner || false,
          tv: room.facilities?.tv || false,
        },
        image: room.image || null,
      });
      setPreviewImage(room.image || null);
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.facilities) {
      setFormData((prev) => ({
        ...prev,
        facilities: {
          ...prev.facilities,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'number' ? parseInt(value, 10) : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditRoom(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Room</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Max Adults</label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Max Children</label>
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Facilities</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="wifi"
                  checked={formData.facilities.wifi}
                  onChange={handleChange}
                  className="mr-2"
                />
                WiFi
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="airConditioner"
                  checked={formData.facilities.airConditioner}
                  onChange={handleChange}
                  className="mr-2"
                />
                Air Conditioner
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="tv"
                  checked={formData.facilities.tv}
                  onChange={handleChange}
                  className="mr-2"
                />
                TV
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input type="file" onChange={handleImageChange} className="block w-full mt-2" />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoomModal;
