import axios from 'axios';

const baseURL = "https://techtest.youapp.ai";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status == 500 || error.response.status == 401) {
    localStorage.removeItem('token')
    localStorage.removeItem('gender')
    localStorage.removeItem('image')
    window.location.href = '/'
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default api;