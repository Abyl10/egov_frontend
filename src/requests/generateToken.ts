import axios from 'axios';

export const getToken = () => {
  axios.post('http://127.0.0.1:8000/get_token');
};
