import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_ENDPOINT,
	headers: { apisite: 'pauportfolio' },
	corsdomian: true
});

export default instance;
