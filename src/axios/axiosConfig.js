import axios from 'axios';
import { BASEURL } from '../constants/serverConst';

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 10000, // Set timeout to 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;