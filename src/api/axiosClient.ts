import axios from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		'content-type': 'application/json',
	},
});

export default axiosClient;
