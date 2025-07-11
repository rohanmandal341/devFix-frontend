import axios from 'axios';
import axiosInstance from '../services/AxiosConfig';

const BASE_URL = "https://setup-snap-api-production-115e.up.railway.app/api/setup";
const URL = "https://setup-snap-api-production-115e.up.railway.app/api/gemini";
const Auth = "https://setup-snap-api-production-115e.up.railway.app/api/auth";


export const register = async (registerData) =>{
const  res = await axios.post(`${Auth}/register`,registerData);
return res.data;
}

export const login = async (loginData) => {
const res = await axios.post(`${Auth}/login`, loginData);
const token = res.data.token;
const roles = res.data.roles;

localStorage.setItem("token", token);
localStorage.setItem("roles", JSON.stringify(roles)); // Save roles as string
  return res.data;
};




export const getAllSetup = async () => {
const response =  await axiosInstance.get(BASE_URL);
return response.data;
}

export const create = async (setup) => {
    const response = await axiosInstance.post(BASE_URL,setup);
    return response.data;
}

export const update = async (id,setup) => {
    const res = await axiosInstance.put(`${BASE_URL}/${id}`,setup);
    return res.data;
}

export const deleteSetup = async (id) => {
    const res = await axiosInstance.delete(`${BASE_URL}/${id}`);
    return res.data;
}

export const search = async (keyword) => {
    const res = await axiosInstance.get(`${BASE_URL}/search?keyword=${keyword}`);
    return res.data;
}
export const askGemini = async (text) => {
  const token = localStorage.getItem("token");

  const response = await axiosInstance.post(
    "/api/gemini", // relative to baseURL → http://localhost:52721/api/gemini
    { text },
    {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};



