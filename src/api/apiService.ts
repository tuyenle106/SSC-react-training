import axios from "./axiosClient";

// const createUser = (name, email, password) => {
//   const URL_BACKEND = "/users/add";
//   const data = {
//     name: name,
//     email: email,
//     password: password,
//   };
//   return axios.post(URL_BACKEND, data);
// };

const getAllPosts = () => {
  const URL_BACKEND = "/posts";
  return axios.get(URL_BACKEND);
}

const getPostById = (id: string | number) => {
  return axios.get(`/posts/${id}`);
};

const getCommentsByPostId = async (postId: string) => {
  return await axios.get(`/comments?postId=${postId}`);
};

export { getAllPosts, getPostById, getCommentsByPostId };