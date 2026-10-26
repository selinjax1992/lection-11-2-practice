import axios from 'axios';

export const fetchAllPosts = () => {
  return axios.get('https://6ad7688495e98f36aef26841.mockapi.io/posts');
};

export const createNewPost = postInfo => {
  return axios.post(
    'https://6ad7688495e98f36aef26841.mockapi.io/posts',
    postInfo
  );
};

export const deletePostById = postId => {
  return axios.delete(
    `https://6ad7688495e98f36aef26841.mockapi.io/posts/${postId}`
  );
};
