import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://gah1mc8og1.execute-api.us-east-1.amazonaws.com/dev',
	headers: { apisite: 'pauportfolio' },
	corsdomian: true
});

export default instance;
