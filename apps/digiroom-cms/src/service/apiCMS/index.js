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

const CMS = () => {
  let instance = axios.create({
    baseURL: getBaseUrl(),
    headers: {
      'Cache-Control': 'no-cache, must-revalidate',
    },
  });

  instance.interceptors.request.use(function (config) {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
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
    async function (error) {
      // Error response for access token expired
      if (error.response && error.response.status === 401) {
        const storedAccessToken = JSON.parse(localStorage.getItem('user'))['access_token'];

        if (!storedAccessToken) {
          // Redirect to login page
          localStorage.removeItem('user');
          redirectToLogin();
          return Promise.reject(error);
        } else {
          // Regenerate access token w/ refresh token
          const baseUrl = getBaseUrl();
          const storedRefreshToken = JSON.parse(localStorage.getItem('user'))['refresh_token'];

          try {
            const res = await axios.post(
              `${baseUrl}/refreshtoken`,
              {
                refreshToken: storedRefreshToken,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );

            if (res.status === 201) {
              // Set new token
              localStorage.setItem('user', JSON.stringify(res.data));
              return instance(error.config);
            }
          } catch (err) {
            // Redirect to login page
            localStorage.removeItem('user');
            redirectToLogin();
            return Promise.reject(err);
          }
        }
      }

      //Add something if needed
      return Promise.reject(error);
    }
  );

  return instance;
};

export default CMS();
