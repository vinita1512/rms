import React from "react";
import Header from "../Header/Header";
import AppRouter from "../../router/AppRouter";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main><Outlet/>{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;