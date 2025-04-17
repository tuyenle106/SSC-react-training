import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api/apiService";
import { Link } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="text-center text-gray-500 flex justify-center items-center h-100 text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-32 py-8 bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7]">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 drop-shadow-sm">
        Blog Posts
      </h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
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
    </div>
  );
};

export default PostsPage;
