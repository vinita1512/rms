import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaBed,
  FaUsers,
  FaClipboardList,
  FaStar,
} from "react-icons/fa"; // Import icons

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyles =
    "flex items-center gap-2 py-2 px-4 text-white rounded hover:bg-gray-600 transition";

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden bg-gray-800 text-white p-3 fixed top-4 left-4 z-50 rounded"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-600">
          Vini Resort
        </div>
        <nav className="mt-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? "bg-gray-600" : ""}`
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink
            to="/admin/manage-rooms"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? "bg-gray-600" : ""}`
            }
          >
            <FaBed /> Manage Rooms
          </NavLink>
          <NavLink
            to="/admin/manage-users"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? "bg-gray-600" : ""}`
            }
          >
            <FaUsers /> Manage Users
          </NavLink>
          <NavLink
            to="/admin/manage-bookings"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? "bg-gray-600" : ""}`
            }
          >
            <FaClipboardList /> Manage Bookings
          </NavLink>
          <NavLink
            to="/admin/manage-reviews"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? "bg-gray-600" : ""}`
            }
          >
            <FaStar /> Manage Reviews
          </NavLink>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
