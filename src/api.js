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
