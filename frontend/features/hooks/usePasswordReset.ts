import { useState } from 'react'

export default function usePasswordReset() {
	const [code, setCode] = useState<string[]>(['', '', '', ''])

	const handleCodeChange = (index: number, value: string) => {
		if (!/^\d$/.test(value)) return

		const newCode = [...code]
		newCode[index] = value.slice(-1)
		setCode(newCode)
	}

	return {
		handleCodeChange,
		code,
		setCode
	}
}
