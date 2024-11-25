import React, { useState } from "react";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import AddRoomModal from "../../components/Admin/Room/AddRoomModal";
import EditRoomModal from "../../components/Admin/Room/EditRoomModal";
import DataTable from "../../components/Admin/DataTable";
import img1 from "../../assets/standard1.jpg";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([
    // Room data
    {
      id: 1,
      name: "Simple Room",
      area: "250 sq. ft.",
      guests: { adults: 5, children: 3 },
      price: 300,
      quantity: 10,
      status: "Active",
      image: img1,
      facilities: ["Wi-Fi", "Air Conditioning", "TV"],
    },
    {
      id: 1,
      name: "Simple Room",
      area: "250 sq. ft.",
      guests: { adults: 5, children: 3 },
      price: 300,
      quantity: 10,
      status: "Active",
      image: img1,
      facilities: ["Wi-Fi", "Air Conditioning", "TV"],
    },
    {
      id: 1,
      name: "Simple Room",
      area: "250 sq. ft.",
      guests: { adults: 5, children: 3 },
      price: 300,
      quantity: 10,
      status: "Active",
      image: img1,
      facilities: ["Wi-Fi", "Air Conditioning", "TV"],
    },
    {
      id: 1,
      name: "Simple Room",
      area: "250 sq. ft.",
      guests: { adults: 5, children: 3 },
      price: 300,
      quantity: 10,
      status: "Active",
      image: img1,
      facilities: ["Wi-Fi", "Air Conditioning", "TV"],
    },
    // Add more room data here...
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editRoomData, setEditRoomData] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 3;

  const handleAddRoom = (roomData) => {
    setRooms([...rooms, { ...roomData, id: rooms.length + 1 }]);
  };

  const handleEditRoom = (updatedRoom) => {
    setRooms(
      rooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
    );
    setIsEditModalOpen(false); // Close modal after editing
  };

  const handleOpenEditModal = (room) => {
    setEditRoomData(room); // Pass room data to modal
    setIsEditModalOpen(true);
  };

  const handleDeleteRoom = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  const handleUploadImage = (roomId) => {
    alert(`Upload image functionality for Room ID: ${roomId}`);
  };

  // Pagination logic
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(rooms.length / roomsPerPage))
    );
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Manage Rooms</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-blue-700"
        >
          + Add Room
        </button>
      </div>

      <AddRoomModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRoom={handleAddRoom}
      />

      <EditRoomModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        room={editRoomData}
        onEditRoom={handleEditRoom}
      />

      <DataTable
        columns={[
          "Sr. No.",
          "Name",
          "Area",
          "Guests",
          "Price",
          "Quantity",
          "Status",
          "Image",
          "Facilities",
          "Actions",
        ]}
        data={currentRooms}
        handleEdit={handleOpenEditModal}
        handleDelete={handleDeleteRoom}
        handleUploadImage={handleUploadImage}
        totalRooms={rooms.length}
        roomsPerPage={roomsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        renderRow={(room, index) => (
          <tr key={room.id}>
            {/* Correctly calculating Sr. No. */}
            <td>{index + 1 + (currentPage - 1) * roomsPerPage}</td>
            <td>{room.name}</td>
            <td>{room.area}</td>
            <td>{`${room.guests.adults} Adults, ${room.guests.children} Children`}</td>
            <td>{room.price}</td>
            <td>{room.quantity}</td>
            <td>{room.status}</td>
            <td>
              <img
                src={room.image}
                alt={room.name}
                className="w-12 h-12 rounded"
              />
            </td>
            <td>{room.facilities.join(", ")}</td>
            <td>
              <button
                onClick={() => handleOpenEditModal(room)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteRoom(room.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleUploadImage(room.id)}
                className="text-green-500 hover:text-green-700 ml-2"
              >
                <FaUpload />
              </button>
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default ManageRooms;
