const ManageUsers = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">john@example.com</td>
              <td className="border px-4 py-2">
                <button className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded">Edit</button>
                <button className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 ml-2 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ManageUsers;
  