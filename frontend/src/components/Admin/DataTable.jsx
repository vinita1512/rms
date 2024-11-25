import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = ({
  columns,
  data,
  handleEdit,
  handleDelete,
  totalRooms,
  roomsPerPage,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 text-left border-b">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((room, index) => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  {index + 1 + (currentPage - 1) * roomsPerPage}
                </td>{" "}
                {/* Correct Sr. No */}
                <td className="px-4 py-2 border-b">{room.name}</td>
                <td className="px-4 py-2 border-b">{room.area}</td>
                <td className="px-4 py-2 border-b">
                  Adults: {room.guests.adults}, Children: {room.guests.children}
                </td>
                <td className="px-4 py-2 border-b">₹{room.price}</td>
                <td className="px-4 py-2 border-b">{room.quantity}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      room.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                {/* Image Column */}
                <td className="px-4 py-2 border-b">
                  <img
                    src={room.image || "/path/to/default/image.jpg"} // Default image if not uploaded
                    alt={room.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                {/* Facilities Column */}
                <td className="px-4 py-2 border-b">
                  {room.facilities && room.facilities.join(", ")}{" "}
                  {/* Display facilities as comma-separated list */}
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(room)}
                      className="px-3 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
                      title="Edit Room"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(room.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                      title="Delete Room"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg border ${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
          className="px-4 py-2 rounded-lg border bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
