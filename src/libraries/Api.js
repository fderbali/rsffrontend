// Repository.js
import axios            from 'axios';
import HttpErrorHandler from './HttpErrorHandler.js';


// API link
axios.defaults.baseURL = "https://rsfbackend.fahmiderbali.com";
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
    headers: {
        'Content-Type':    'application/json;charset=UTF-8',
        'Accept':          'application/json',
        'Accept-Language': 'fr-CA'
    }
});

axiosInstance.interceptors.request.use((config) => {
    let jwt = localStorage.getItem("jwt");
    if(jwt !== null){
        config['headers']['Authorization'] = 'Bearer '+jwt;
    }
    return config;
});

// Intercept the response in errors case, should be treated in httpErrorHandler first.
axiosInstance.interceptors.response.use(null, (error) => {
    HttpErrorHandler.checkHttpErrors(error);
    return Promise.reject(error);
});

export default axiosInstance;