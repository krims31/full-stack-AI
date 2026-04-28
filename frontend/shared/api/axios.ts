import axios from 'axios'

interface LoginResponse {
	token: string
	email: string
}

export const api = axios.create({
	baseURL: 'http://localhost:5173',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})

export async function login(
	email: string,
	password: string
): Promise<LoginResponse> {
	try {
		// Use the instance created above
		const { data } = await api.post<LoginResponse>('/auth/login', {
			email,
			password
		})
		return data
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.error(
				'Error logging in:',
				error.response?.data?.message || error.message
			)
		} else {
			console.error('Unexpected error:', error)
		}
		throw error
	}
}
