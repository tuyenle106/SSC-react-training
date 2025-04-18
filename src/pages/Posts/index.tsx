import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api/apiService";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<number | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [newPost, setNewPost] = useState({ title: "", body: "", userId: "" });

  const POSTS_PER_PAGE = 6;

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getAllPosts();
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again later!");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let result = posts;

    if (searchTerm.trim()) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedUser !== "all") {
      result = result.filter((post) => post.userId === selectedUser);
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset page when filtering
  }, [searchTerm, selectedUser, posts]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="text-center text-gray-500 flex justify-center items-center h-96 text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="px-4 sm:px-8 lg:px-32 py-10 bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7]
    min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8 text-center drop-shadow-sm text-[#6c3bff]">
        Blog Posts
      </h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </div>
        </div>

        {/* User Filter Dropdown */}
        <div className="w-full md:w-1/4">
          <select
            value={selectedUser}
            onChange={(e) =>
              setSelectedUser(
                e.target.value === "all" ? "all" : parseInt(e.target.value)
              )
            }
            className="cursor-pointer w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 bg-white"
          >
            <option value="all">All Users</option>
            {[...new Set(posts.map((p) => p.userId))].map((userId) => (
              <option key={userId} value={userId}>
                User {userId}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full cursor-pointer md:w-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-2xl transition-all border-2 border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm whitespace-pre-line">
              {post.body}
            </p>
            <Link to={`/posts/${post.id}`}>
              <div className="text-xs mt-4 text-blue-500 hover:underline cursor-pointer text-right">
                Continue reading
              </div>
            </Link>
          </div>
        ))}
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

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-auto shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
              New Post
            </h2>

            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Body"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="User ID"
              value={newPost.userId}
              onChange={(e) =>
                setNewPost({ ...newPost, userId: parseInt(e.target.value) })
              }
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const fakePost: Post = {
                    ...newPost,
                    id: Date.now(), // fake ID
                  };
                  setPosts([fakePost, ...posts]); // Add to the beginning of the list
                  setIsFormOpen(false);
                  setNewPost({ title: "", body: "", userId: "" }); // Reset form
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
