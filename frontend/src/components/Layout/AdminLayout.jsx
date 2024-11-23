import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar for Admin */}
      <AdminSidebar />
      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 p-6 lg:ml-64">
        {/* Renders the nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
