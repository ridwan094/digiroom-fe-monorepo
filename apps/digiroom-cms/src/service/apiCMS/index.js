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

const redirectToLogin = () => {
  // Redirect to login page
  window.location.href = '/'; // Change the URL as needed
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Cache-Control': 'no-cache, must-revalidate',
  },
});

instance.interceptors.request.use(function (config) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  // Add checking Version APP
  config.headers['X-App-Version'] = packageJson.version;
  return config;
});

instance.interceptors.response.use(
  function (response) {
    // Add something if needed
    return response.data;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Redirect to login page
      localStorage.removeItem('user');
      redirectToLogin();
    }
    // Add something if needed
    return Promise.reject(error);
  }
);

export default instance;
