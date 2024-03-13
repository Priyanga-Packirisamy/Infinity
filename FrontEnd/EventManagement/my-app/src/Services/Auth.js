import axios from "axios";
import instance from './Axios.js';
const api_uri = "http://localhost:8181";

export const register =(data) => axios.post(`${api_uri}/api/v1/auth/register`,data);
export const login =(data) => axios.post(`${api_uri}/api/v1/auth/login`,data);
export const logout =() => instance.post(`${api_uri}/api/v1/auth/logout`);
