import { PenLine } from 'lucide-react'

export default function PersonalInformation() {
	return (
		<>
			<div>
				{' '}
				<h1 className="flex justify-center items-center text-lg text-black absolute top-65 left-116">
					{' '}
					Personal Information{' '}
				</h1>{' '}
				<p className="flex justify-center items-center text-gray-600 absolute top-72 left-116">
					{' '}
					Manage your information details, including username, birthdate, email,
					and phone number, to ensure your <br /> account is up to date.{' '}
				</p>{' '}
				{/* Username */}{' '}
				<h1 className="text-black flex justify-center absolute top-87 left-116">
					{' '}
					Username{' '}
				</h1>{' '}
				<input
					type="text"
					placeholder="Username"
					className="flex justify-center absolute top-94 left-116 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 left-190 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				{/* Birthdate */}{' '}
				<h1 className="text-black flex justify-center absolute top-87 left-205">
					{' '}
					Birthdate{' '}
				</h1>{' '}
				<input
					type="date"
					placeholder=""
					className="flex justify-center absolute top-94 left-205 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 left-298 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				{/* Email */}{' '}
				<h1 className="text-black flex justify-center absolute top-107 left-116">
					{' '}
					Email{' '}
				</h1>{' '}
				<input
					type="email"
					placeholder="Email"
					className="flex justify-center absolute top-114 left-116 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 left-190 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				{/* Phone Number */}{' '}
				<h1 className="text-black flex justify-center absolute top-107 left-205">
					{' '}
					Phone Number{' '}
				</h1>{' '}
				<input
					type="tel"
					inputMode="numeric"
					placeholder="+7 (999) 000-00-00"
					className="flex justify-center absolute top-114 left-205 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 left-298 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
			</div>
		</>
	)
}
