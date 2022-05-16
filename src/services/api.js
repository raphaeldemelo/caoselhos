import axios from 'axios';

//https://api.adviceslip.com/advice

const api = axios.create({
    baseURL: 'https://api.adviceslip.com'
});

export default api;