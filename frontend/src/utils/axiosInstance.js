import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://contact-book-app-backend-20ie.onrender.com/",
    withCredentials: true
})
