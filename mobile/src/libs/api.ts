import axios from 'axios';

export const api = axios.create({
  baseURL: "http://192.168.100.171:3333"
})
