import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../api/apiService";
import { FaSearch } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset page when search changes
  }, [searchTerm, users]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-center text-gray-500 flex justify-center items-center h-100 text-6xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 md:p-10 bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6c3bff] mb-8 md:mb-10 drop-shadow-sm">
        Users List
      </h1>

      {/* Search input */}
      <div className="mb-6 flex">
        <div className="relative w-full md:w-1/2">
          {/* Input Search */}
          <input
            type="text"
            placeholder="Search by name, username or email"
            className="w-full bg-white max-w-xs border border-gray-300 rounded-md px-10 py-2 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400
            transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg">
        <table className="min-w-[600px] w-full text-xs md:text-sm text-left">
          <thead className="bg-blue-100 text-blue-800 uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 font-medium text-gray-700">
                  {user.id}
                </td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 text-center">
                  <Link to={`/users/${user.id}`}>
                    <button
                      className="px-3 py-1.5 bg-blue-500 text-white text-xs 
                        rounded-md hover:bg-blue-600 transition shadow-sm cursor-pointer"
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center px-4 py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white border border-gray-300 hover:bg-blue-600"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white border border-gray-300 hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
