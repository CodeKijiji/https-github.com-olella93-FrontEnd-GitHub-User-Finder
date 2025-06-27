import axios from 'axios';

const API = axios.create({
  baseURL: 'https://https-github-com-olella93-backend-github-n1e1.onrender.com/api', 
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default API;
