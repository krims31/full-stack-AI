import axios from 'axios'

export const api = axios.create({
	baseURL: 'server - backend',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})
