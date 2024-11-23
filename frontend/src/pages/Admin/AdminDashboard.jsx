import React, { useState, useEffect } from "react";
import MetricCard from "../../components/Admin/MetricCard"; // Adjust path if necessary
import FilterDropdown from "../../components/Admin/FilterDropdown"; // Adjust path if necessary

const AdminDashboard = () => {
  const [bookingFilter, setBookingFilter] = useState("30"); // Default: Last 30 days
  const [userFilter, setUserFilter] = useState("30"); // Default: Last 30 days
  const [usersFilter, setUsersFilter] = useState("30"); // Default: Last 30 days

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

  const renderMetricCards = (analytics) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard
        colorFrom="green-400"
        colorTo="green-500"
        value={analytics.totalBookings}
        label="Total Bookings"
      />
      <MetricCard
        colorFrom="blue-400"
        colorTo="blue-500"
        value={analytics.activeBookings}
        label="Active Bookings"
      />
      <MetricCard
        colorFrom="red-400"
        colorTo="red-500"
        value={analytics.canceledBookings}
        label="Canceled Bookings"
      />
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard
          colorFrom="blue-500"
          colorTo="blue-600"
          value={150}
          label="Total Users"
        />
        <MetricCard
          colorFrom="green-500"
          colorTo="green-600"
          value={100}
          label="Total Bookings"
        />
        <MetricCard
          colorFrom="yellow-500"
          colorTo="yellow-600"
          value={50}
          label="Total Rooms"
        />
      </div>

      {/* Booking Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Booking Analytics
          </h2>
          <FilterDropdown value={bookingFilter} onChange={setBookingFilter} />
        </div>

        {renderMetricCards(bookingAnalytics)}
      </div>

      {/* Users Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Users</h2>
          <FilterDropdown value={usersFilter} onChange={setUsersFilter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            colorFrom="blue-400"
            colorTo="blue-500"
            value={usersData.totalUsers}
            label="Total Users"
          />
          <MetricCard
            colorFrom="green-400"
            colorTo="green-500"
            value={usersData.activeUsers}
            label="Active Users"
          />
          <MetricCard
            colorFrom="red-400"
            colorTo="red-500"
            value={usersData.inactiveUsers}
            label="Inactive Users"
          />
        </div>
      </div>

      {/* User, Queries, Reviews Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            User, Queries, Reviews Analytics
          </h2>
          <FilterDropdown value={userFilter} onChange={setUserFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            colorFrom="green-400"
            colorTo="green-500"
            value={userAnalytics.newRegistrations}
            label="New Registrations"
          />
          <MetricCard
            colorFrom="blue-400"
            colorTo="blue-500"
            value={userAnalytics.queries}
            label="Queries"
          />
          <MetricCard
            colorFrom="purple-400"
            colorTo="purple-500"
            value={userAnalytics.reviews}
            label="Reviews"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
