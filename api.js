import axios from 'axios';

const api = axios.create({
  baseURL: 'https://loja-mac.onrender.com/',
});

export default api;

