import axios from 'axios';
import apiConfig from './api-config';

const getBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return apiConfig.development;
    default:
      return apiConfig.local;
  }
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache, must-revalidate',
  },
});

instance.interceptors.response.use(
  function (response) {
    //Add something if needed
    return response.data;
  },
  async function (error) {
    //Add something if needed
    return Promise.reject(error);
  }
);

export default instance;
