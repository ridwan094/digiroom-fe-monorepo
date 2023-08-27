import axios from 'axios';
import version from '../../../../digiroom-cms/package.json';
import apiConfig from './api-config';

const getBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return apiConfig.development;
    default:
      return apiConfig.development;
  }
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache, must-revalidate',
  },
});

instance.interceptors.request.use(function (config) {
  let token = sessionStorage.authKey;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // Add checking Version APP
  config.headers['X-App-Version'] = packageJson.version; // Add version header
  return config;
});

instance.interceptors.response.use(
  function (response) {
    //Add something if needed
    return response.data;
  },
  function (error) {
    //Add something if needed
    return Promise.reject(error);
  }
);

export default instance;
