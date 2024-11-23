import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/Admin/FilterDropdown"; // Adjust path if necessary

const AdminDashboard = () => {
  const [bookingFilter, setBookingFilter] = useState("30");
  const [userFilter, setUserFilter] = useState("30");
  const [usersFilter, setUsersFilter] = useState("30");

  const [bookingAnalytics, setBookingAnalytics] = useState({
    totalBookings: 0,
    activeBookings: 0,
    canceledBookings: 0,
  });

  const [userAnalytics, setUserAnalytics] = useState({
    newRegistrations: 0,
    queries: 0,
    reviews: 0,
  });

  const [usersData, setUsersData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
  });

  useEffect(() => {
    const fetchBookingAnalytics = () => {
      const data =
        bookingFilter === "7"
          ? { totalBookings: 25, activeBookings: 20, canceledBookings: 5 }
          : bookingFilter === "30"
          ? { totalBookings: 100, activeBookings: 80, canceledBookings: 20 }
          : { totalBookings: 500, activeBookings: 450, canceledBookings: 50 };

      setBookingAnalytics(data);
    };

    fetchBookingAnalytics();
  }, [bookingFilter]);

  useEffect(() => {
    const fetchUserAnalytics = () => {
      const data =
        userFilter === "7"
          ? { newRegistrations: 5, queries: 2, reviews: 3 }
          : userFilter === "30"
          ? { newRegistrations: 20, queries: 10, reviews: 15 }
          : { newRegistrations: 100, queries: 50, reviews: 70 };

      setUserAnalytics(data);
    };

    fetchUserAnalytics();
  }, [userFilter]);

  useEffect(() => {
    const fetchUsersData = () => {
      const data =
        usersFilter === "7"
          ? { totalUsers: 50, activeUsers: 40, inactiveUsers: 10 }
          : usersFilter === "30"
          ? { totalUsers: 150, activeUsers: 120, inactiveUsers: 30 }
          : { totalUsers: 600, activeUsers: 500, inactiveUsers: 100 };

      setUsersData(data);
    };

    fetchUsersData();
  }, [usersFilter]);

  const renderStatBox = (bgColor, value, label, icon, textColor) => (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md ${bgColor}`}
    >
      <div className="mb-4">
        <span className={`${textColor} text-4xl`}>{icon}</span>
      </div>
      <h3 className="text-3xl font-semibold text-white mb-2">{value}</h3>
      <p className="text-lg text-white font-medium">{label}</p>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {renderStatBox("bg-blue-500", 150, "Total Users", "👤", "text-white")}
        {renderStatBox(
          "bg-green-500",
          100,
          "Total Bookings",
          "📅",
          "text-white"
        )}
        {renderStatBox("bg-yellow-500", 50, "Total Rooms", "🏨", "text-white")}
      </div>

      {/* Booking Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Booking Analytics
          </h2>
          <FilterDropdown value={bookingFilter} onChange={setBookingFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderStatBox(
            "bg-green-500",
            bookingAnalytics.totalBookings,
            "Total Bookings",
            "📈",
            "text-white"
          )}
          {renderStatBox(
            "bg-blue-500",
            bookingAnalytics.activeBookings,
            "Active Bookings",
            "🟢",
            "text-white"
          )}
          {renderStatBox(
            "bg-red-500",
            bookingAnalytics.canceledBookings,
            "Canceled Bookings",
            "❌",
            "text-white"
          )}
        </div>
      </div>

      {/* Users Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Users</h2>
          <FilterDropdown value={usersFilter} onChange={setUsersFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderStatBox(
            "bg-blue-500",
            usersData.totalUsers,
            "Total Users",
            "👥",
            "text-white"
          )}
          {renderStatBox(
            "bg-green-500",
            usersData.activeUsers,
            "Active Users",
            "✅",
            "text-white"
          )}
          {renderStatBox(
            "bg-red-500",
            usersData.inactiveUsers,
            "Inactive Users",
            "🔒",
            "text-white"
          )}
        </div>
      </div>

      {/* User, Queries, Reviews Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            User, Queries, Reviews Analytics
          </h2>
          <FilterDropdown value={userFilter} onChange={setUserFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderStatBox(
            "bg-green-500",
            userAnalytics.newRegistrations,
            "New Registrations",
            "🆕",
            "text-white"
          )}
          {renderStatBox(
            "bg-blue-500",
            userAnalytics.queries,
            "Queries",
            "💬",
            "text-white"
          )}
          {renderStatBox(
            "bg-purple-500",
            userAnalytics.reviews,
            "Reviews",
            "⭐",
            "text-white"
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
