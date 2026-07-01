import { useRef, useState } from 'react'

export function useAttach() {
	const [file, setFile] = useState<File | null>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		fileInputRef.current?.click()
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]
		if (selectedFile) {
			setFile(selectedFile)
		}
	}

	return {
		file,
		fileInputRef,
		handleClick,
		handleFileChange
	}
}