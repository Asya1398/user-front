import axios from 'axios';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('accessToken');
    config.headers = {
      Authorization: `Bearer ${access_token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    try {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = localStorage.getItem('refresh_token');
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + access_token;
        return axiosApiInstance(originalRequest);
      }
      if (error?.response?.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.replace('/login');
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default axiosApiInstance;
