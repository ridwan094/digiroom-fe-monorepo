import axios from 'axios';
import packageJson from '../../../../digiroom-cms/package.json';
import apiConfig from './api-config';

const getBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return apiConfig.development;
    default:
      return apiConfig.local;
  }
};

const CMS = () => {
  let instance = axios.create({
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
    config.headers['X-App-Version'] = packageJson.version;
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

  return instance;
};

export default CMS();
