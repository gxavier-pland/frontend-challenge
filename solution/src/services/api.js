import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pland-api.herokuapp.com',
});

export default api;
