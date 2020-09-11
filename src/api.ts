import axios from 'axios';
import { SERVER_URL } from './consts';

const createApi = () => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { createApi };
