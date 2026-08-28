import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router'

export default function usePasswordReset() {
	const [code, setCode] = useState<string[]>(['', '', '', ''])
	const location = useLocation()

	const email = location.state?.email

	const handleCodeChange = (index: number, value: string) => {
		if (!/^\d$/.test(value)) return

		const newCode = [...code]
		newCode[index] = value.slice(-1)
		setCode(newCode)
	}

	const handleVerifyCode = async () => {
		const enteredCode = code.join('')

		if (enteredCode.length !== 4) {
			return
		}

		try {
			const response = await axios.post(
				'https://full-stack-ai-6uq7.onrender.com/api/auth/verify-code',
				{
					email,
					code: enteredCode
				}
			)
			console.log('Backend response: ', response.data)
		} catch (error) {
			console.error('Verify code error: ', error)
		}
	}

	return {
		handleCodeChange,
		code,
		setCode,
		handleVerifyCode
	}
}
