import { removeTokens } from '@/utils/token';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if ([401].includes(error.response?.status)) {
      removeTokens();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
