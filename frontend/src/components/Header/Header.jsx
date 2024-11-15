import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/resortlogo.png";
// import { useAuth } from "../context/auth";

const Header = () => {
  // const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // setAuth({ ...auth, user: null, token: "" });
    // localStorage.removeItem("auth");
    // toast.success("Logout Successfully");
  };

  return (
    <nav className="bg-gray-900 text-white py-2 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-auto mr-3" />
          <h1 className="text-lg font-semibold">Vini Resort</h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto space-x-6 ml-auto mt-2 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Authentication Links */}
          <ul className="flex flex-col md:flex-row items-center ml-6 md:ml-0">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>

          {/* User Dropdown */}
          <ul className="flex items-center ml-6 relative">
            <li>
              <button
                onClick={toggleDropdown}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded-md focus:outline-none text-white"
              >
                {/* {auth?.user?.name} */}
                User
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <NavLink
                      to={`/dashboard/user`}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                          : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                          : "hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
