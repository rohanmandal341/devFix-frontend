// src/services/AxiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://setup-snap-api-production-115e.up.railway.app", // ✅ lowercase!
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
