import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ongs-api.herokuapp.com/'
})

export default api;