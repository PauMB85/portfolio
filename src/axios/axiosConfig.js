import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://48l01uss34.execute-api.us-east-1.amazonaws.com/devnpm',
    headers: {'apisite': 'pauportfolio', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers':'*'}
});

export default instance;