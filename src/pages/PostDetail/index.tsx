import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById, getCommentsByPostId } from "../../api/apiService";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostById(id!);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post detail:", err);
        setError("Failed to fetch post detail. Please try again later!");
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await getCommentsByPostId(id!);
        setComments(res.data);
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError("Failed to fetch comments. Please try again later!");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 flex justify-center items-center h-100 text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-16 py-12 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <Link to="/posts">
          <div className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Posts
          </div>
        </Link>

        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : post ? (
          <>
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-700 text-base whitespace-pre-line leading-relaxed">
              {post.body}
            </p>
            <div className="mt-6 text-sm text-gray-500">
              User ID: {post.userId}
            </div>

            {/* Comments Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Comments
              </h2>

              {comments.length > 0 ? (
                <div>
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
                    >
                      <h3 className="font-semibold text-gray-800">
                        {comment.name}
                      </h3>
                      <p className="text-sm text-gray-500">{comment.email}</p>
                      <p className="mt-2 text-gray-700">{comment.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No comments available for this post.
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500">Post not found with this ID.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
