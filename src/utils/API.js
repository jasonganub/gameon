import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.boardgameatlas.com/api',
    responseType: 'json'
});
  