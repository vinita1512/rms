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
  isUserTable, // Differentiates between user and room table
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
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {isUserTable ? (
                  <>
                    {/* User-specific columns */}
                    <td className="px-4 py-2 border-b">
                      {index + 1 + (currentPage - 1) * roomsPerPage}
                    </td> {/* Correct User ID */}
                    <td className="px-4 py-2 border-b">{item.name}</td>
                    <td className="px-4 py-2 border-b">{item.mobile}</td> {/* Corrected field */}
                    <td className="px-4 py-2 border-b">{item.address}</td>
                    <td className="px-4 py-2 border-b">{item.dob}</td>
                    <td className="px-4 py-2 border-b">
                      <span
                        className={`px-2 py-1 rounded ${
                          item.verified === "Yes"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.verified}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-b">
                      <span
                        className={`px-2 py-1 rounded ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-b">{item.date}</td>
                  </>
                ) : (
                  <>
                    {/* Room-specific columns */}
                    <td className="px-4 py-2 border-b">
                      {index + 1 + (currentPage - 1) * roomsPerPage}
                    </td>{" "}
                    {/* Correct Sr. No */}
                    <td className="px-4 py-2 border-b">{item.name}</td>
                    <td className="px-4 py-2 border-b">{item.area}</td>
                    <td className="px-4 py-2 border-b">
                      {/* Check if room.guests exists, otherwise default to "0" */}
                      Adults: {item.guests?.adults || 0}, Children:{" "}
                      {item.guests?.children || 0}
                    </td>
                    <td className="px-4 py-2 border-b">₹{item.price}</td>
                    <td className="px-4 py-2 border-b">{item.quantity}</td>
                    <td className="px-4 py-2 border-b">
                      <span
                        className={`px-2 py-1 rounded ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    {/* Image Column */}
                    <td className="px-4 py-2 border-b">
                      <img
                        src={item.image || "/path/to/default/image.jpg"} // Default image if not uploaded
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    {/* Facilities Column */}
                    <td className="px-4 py-2 border-b">
                      {item.facilities && item.facilities.join(", ")}{" "}
                      {/* Display facilities as comma-separated list */}
                    </td>
                  </>
                )}
                <td className="px-4 py-2 border-b">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
                      title={isUserTable ? "Edit User" : "Edit Room"}
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                      title={isUserTable ? "Delete User" : "Delete Room"}
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
