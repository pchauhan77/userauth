import axios from 'axios';

// Create an instance of Axios
const instance = axios.create({
  // Set your base URL and other configurations
  baseURL: 'http://localhost:5000'
  // ...
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Retrieve the token from where you store it (e.g., local storage, state, etc.)
  const token = localStorage.getItem('access_token');

  // Set the token in the request headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    // If the response status is between 200 and 299, return the response as is
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      // await logout();
    }
    return Promise.reject(error);
  }
);

export default instance;
