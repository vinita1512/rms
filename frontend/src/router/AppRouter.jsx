import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Gallery from "../pages/Gallery";
import RoomPage from "../pages/RoomPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/roompage" element={<RoomPage/>} />
    </Routes>
  );
};

export default AppRouter;
