import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/' // Update this base URL
});

export default instance;
