import axios from "axios";
import instance from './Axios.js';

const api_uri = "http://localhost:8181";


export const eventpost =(data) => instance.post(`${api_uri}/events/add`,data);
export const eventget =() => instance.get(`${api_uri}/events/all`);
export const eventdel =(eventid) => instance.delete(`${api_uri}/events/delete?eventid=${eventid}`);
