import axios from "axios";
import instance from './Axios.js';

const api_uri = "http://localhost:8181";


export const bookpost =(data) => instance.post(`${api_uri}/book/add`,data);
export const bookget =() => instance.get(`${api_uri}/book/all`);
export const bookput =(bookid, data) => instance.put(`${api_uri}/book/put?bookid=${bookid}`,data);
export const bookdel =(bookid) => instance.delete(`${api_uri}/book/delete?bookid=${bookid}`);

