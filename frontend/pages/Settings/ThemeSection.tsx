import { useState } from 'react'

export default function ThemeSection() {
	const [selectedTheme, setSelectedTheme] = useState('light')

	const themes = [
		{ id: 'light', label: 'Light Mode', icon: '☀️' },
		{ id: 'dark', label: 'Dark Mode', icon: '🌙' },
		{ id: 'custom', label: 'Custom', icon: '🎨' }
	]

	return (
		// Use a flex-container with absolute position
		<div className="flex gap-20 p-6 items-start bg-gray-50 rounded-xl">
			{themes.map(theme => {
				const isSelected = selectedTheme === theme.id
				return (
					<label
						key={theme.id}
						className={`flex flex-col items-center cursor-pointer group`}
					>
						{/* Card */}
						<div
							className={`
              w-32 h-20 mt-148 left-135 relative border rounded-lg flex justify-center items-center 
              bg-white shadow-md transition-all duration-200 
              ${isSelected ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg' : 'border-black/10 hover:shadow-lg'}
            `}
						>
							<span className="text-3xl">{theme.icon}</span>
						</div>

						{/* Radio Button and text */}
						<div className="mt-2 flex items-center gap-2">
							<input
								type="radio"
								name="theme"
								value={theme.id}
								checked={isSelected}
								onChange={() => setSelectedTheme(theme.id)}
								className="w-4 h-4 left-135 relative text-blue-600 focus:ring-blue-500 border-gray-300"
							/>
							<span
								className={`text-sm left-135 relative font-medium ${isSelected ? 'text-blue-600' : 'text-gray-700'}`}
							>
								{theme.label}
							</span>
						</div>
					</label>
				)
			})}
		</div>
	)
}
