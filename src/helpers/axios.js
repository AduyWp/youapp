import axios from 'axios';

const baseURL = "https://techtest.youapp.ai";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;