import axios from 'axios';

const token = sessionStorage.getItem('Authorization');

const api = axios.create({
  baseURL: 'https://pland-api.herokuapp.com',
  headers: {
    Authorization: `JWT ${token}`,
  },
});

export default api;
