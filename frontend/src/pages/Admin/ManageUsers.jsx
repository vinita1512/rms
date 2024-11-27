import React, { useState } from "react";
import DataTable from "../../components/Admin/DataTable";
import EditUserModal from "../../components/Admin/User/EditUserModal";
import AddUserModal from "../../components/Admin/User/AddUserModal"; // Adjust path if necessary

const ManageUsers = () => {
  const initialUserData = [
    {
      id: 1,
      name: "John Doe",
      mobile: "9876543210",
      address: "123 Street, City",
      dob: "1990-01-01",
      verified: true,
      status: "Active",
      date: "2024-11-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobile: "8765432109",
      address: "456 Avenue, City",
      dob: "1992-03-15",
      verified: false,
      status: "Inactive",
      date: "2024-11-10",
    },
    {
      id: 3,
      name: "Alice Johnson",
      mobile: "7654321098",
      address: "789 Boulevard, City",
      dob: "1995-07-21",
      verified: true,
      status: "Active",
      date: "2024-11-15",
    },
  ];

  const [userData, setUserData] = useState(initialUserData);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false); // For the add user modal
  const usersPerPage = 5;

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = (editedUser) => {
    setUserData((prevData) =>
      prevData.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
  };

  const handleAddUser = (newUser) => {
    setUserData((prevData) => [...prevData, newUser]);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUserData((prevData) => prevData.filter((user) => user.id !== userId));
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(userData.length / usersPerPage))
    );
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Manage Users</h1>
        <button
          onClick={() => setAddingUser(true)}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow hover:from-green-600 hover:to-green-700"
        >
          + Add User
        </button>
      </div>

      <DataTable
        columns={[
          "User ID",
          "Name",
          "Mobile No.",
          "Address",
          "DOB",
          "Verified",
          "Status",
          "Date",
          "Actions",
        ]}
        data={currentUsers.map((user, index) => ({
          ...user,
          srNo: indexOfFirstUser + index + 1,
          verified: user.verified ? "Yes" : "No",
          statusColor:
            user.status === "Active"
              ? "bg-green-200 text-green-800"
              : "bg-blue-200 text-blue-800",
        }))}
        handleEdit={handleEditUser}
        handleDelete={handleDeleteUser}
        isUserTable={true}
        totalRooms={userData.length}
        roomsPerPage={usersPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSaveUser}
        />
      )}

      {addingUser && (
        <AddUserModal
          onClose={() => setAddingUser(false)}
          onSave={handleAddUser}
        />
      )}
    </div>
  );
};

export default ManageUsers;
