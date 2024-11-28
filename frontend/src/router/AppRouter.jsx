import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Gallery from "../pages/Gallery";
import RoomPage from "../pages/RoomPage";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageRooms from "../pages/Admin/ManageRooms";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageBookings from "../pages/Admin/ManageBookings";
import ManageReviews from "../pages/Admin/ManageReviews";
import AdminLayout from "../components/Layout/AdminLayout";
import UserLayout from "../components/Layout/UserLayout";
import BookingPage from "../pages/BookingPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirect Root Path to Home */}
      <Route path="/" element={<Navigate to="/home" />} />
      
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/roompage" element={<RoomPage />} />
        <Route path="/booking/:roomId" element={<BookingPage />} />
      </Route>
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="manage-rooms" element={<ManageRooms />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
        <Route path="manage-reviews" element={<ManageReviews />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
