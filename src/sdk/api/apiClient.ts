import axios, { AxiosRequestConfig } from 'axios';

const fetchClient = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use((axiosConfig) => {
    const token = localStorage.getItem('accessToken');
    axiosConfig.headers.Authorization = token ? `Bearer ${token}` : '';
    return axiosConfig;
  });

  return instance;
};

export default fetchClient();
