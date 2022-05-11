// Repository.js
import axios            from 'axios';
import HttpErrorHandler from './HttpErrorHandler.js';

// API link
axios.defaults.baseURL = "http://rsfbackend.test";
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
    headers: {
        'Content-Type':    'application/json;charset=UTF-8',
        'Accept':          'application/json',
        'Accept-Language': 'fr-CA'
    }
});

// Intercept the response in errors case, should be treated in httpErrorHandler first.
axiosInstance.interceptors.response.use(null, (error) => {
    HttpErrorHandler.checkHttpErrors(error);
    return Promise.reject(error);
});

export default axiosInstance;