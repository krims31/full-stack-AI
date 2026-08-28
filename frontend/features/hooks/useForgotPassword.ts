import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useForgotPassword() {
	const [email, setEmail] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const trimmedEmail = email.trim()

		if (!trimmedEmail) {
			return
		}

		try {
			setLoading(true)

			const response = await axios.post(
				'http://localhost:5000/api/auth/forgot-password',
				{
					email: trimmedEmail
				}
			)

			console.log('Backend response: ', response.data)

			navigate('/password-reset', {
				state: {
					email: trimmedEmail,
					code: response.data.code
				}
			})
		} catch (error) {
			console.error('Forgot password error: ', error)
		} finally {
			setLoading(false)
		}
	}

	return {
		email,
		setEmail,
		loading,
		handleSubmit
	}
}
