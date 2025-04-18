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
  return axios.get("/posts");
}

const getPostById = (id: string | number) => {
  return axios.get(`/posts/${id}`);
};

const getCommentsByPostId = async (postId: string) => {
  return await axios.get(`/comments?postId=${postId}`);
};

const getAllUsers = () => {
  return axios.get("/users");
}

const getUserById = (id: string | number) => {
  return axios.get(`/users/${id}`);
};

export { getAllPosts, getPostById, getCommentsByPostId, getAllUsers, getUserById };