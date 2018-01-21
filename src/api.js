import * as http from './utils/http.helper';

const baseUrl = 'http://localhost:3001';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () => {
  return http.getJson(`${baseUrl}/categories`, { headers });
};

export const getPosts = (category) => {
  let postUrl = category ? `${category}/posts` : 'posts';
  return http.getJson(`${baseUrl}/${postUrl}`, { headers });
};

export const getPost = (id) => {
  return http.getJson(`${baseUrl}/posts/${id}`, { headers });
};

export const getComments = (id) => {
  return http.getJson(`${baseUrl}/posts/${id}/comments`, { headers });
};

export const editPost = (post) => {
  return http.putJson(`${baseUrl}/posts/${post.id}`, { headers, body: post });
};

export const votePost = (post, upVote) => {
  const option = upVote ? "upVote" : "downVote";
  return http.postJson(`${baseUrl}/posts/${post.id}`, { headers, body: { option } });
};

export const deletePost = (post) => {
  return http.deleteJson(`${baseUrl}/posts/${post.id}`, { headers });
};

export const createPost = (post) => {
  return http.postJson(`${baseUrl}/posts`, { headers, body: post });
};

export const editComment = (comment) => {
  return http.putJson(`${baseUrl}/comments/${comment.id}`, { headers, body: comment });
};

export const saveComment = (comment) => {
  return http.postJson(`${baseUrl}/comments`, { headers, body: comment });
};

export const deleteComment = (comment) => {
  return http.deleteJson(`${baseUrl}/comments/${comment.id}`, { headers });
};
