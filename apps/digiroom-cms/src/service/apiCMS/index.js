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

const CMS = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache, must-revalidate',
  },
});

CMS.interceptors.request.use(function (config) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  // Add checking Version APP
  config.headers['X-App-Version'] = packageJson.version;
  return config;
});

CMS.interceptors.response.use(
  function (response) {
    // Add something if needed
    return response.data;
  },
  function (error) {
    // Add something if needed
    return Promise.reject(error);
  }
);

export default CMS;
