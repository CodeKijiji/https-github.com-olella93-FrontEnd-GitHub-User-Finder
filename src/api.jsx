import axios from 'axios';

const API = axios.create({
  baseURL: 'https://back-end-github-user-finder.onrender.com/api',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for auth tokens
API.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for better error handling
API.interceptors.response.use(
  response => response,
  error => {
    // Handle CORS/preflight errors specifically
    if (error.message === 'Network Error' && !error.response) {
      console.error('CORS/Network Error - Possible causes:');
      console.error('1. Backend down or wrong URL');
      console.error('2. Missing CORS headers on backend');
      console.error('3. HTTPS/HTTP mismatch');
    }
    return Promise.reject(error);
  }
);

export default API;