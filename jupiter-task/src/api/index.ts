import axios from "axios";

export const BASE_URL = 'http://localhost:3001'

export const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})
