import { PenLine } from 'lucide-react'

export default function PersonalInformation() {
	return (
		<>
			<div>
				{' '}
				<h1 className="flex justify-center items-center text-lg text-black absolute top-65 2xl:ml-116 xl:ml-76">
					{' '}
					Personal Information{' '}
				</h1>{' '}
				<p className="flex justify-center items-center text-gray-600 absolute top-72 2xl:ml-116 xl:ml-76">
					{' '}
					Manage your information details, including username, birthdate, email,
					and phone number, to ensure your <br /> account is up to date.{' '}
				</p>{' '}
				<h1 className="text-black flex justify-center absolute top-87 2xl:ml-116 xl:ml-76">
					{' '}
					Username{' '}
				</h1>{' '}
				<input
					type="text"
					placeholder="Username"
					className="flex justify-center absolute top-94 2xl:ml-116 xl:ml-76 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent
					firefox:focus:ring-purple-400
					firefox:placeholder:opacity-60
					webkit:autofill:bg-yellow-50"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 2xl:ml-190 xl:ml-150 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				<h1 className="text-black flex justify-center absolute top-87 2xl:ml-205 xl:ml-162">
					{' '}
					Birthdate{' '}
				</h1>{' '}
				<input
					type="date"
					placeholder=""
					className="flex justify-center absolute top-94 2xl:ml-205 xl:ml-162 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent
					firefox:focus:ring-purple-400
					firefox:placeholder:opacity-60
					webkit:autofill:bg-yellow-50"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 2xl:ml-298 xl:ml-257 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				<h1 className="text-black flex justify-center absolute top-107 2xl:ml-116 xl:ml-76">
					{' '}
					Email{' '}
				</h1>{' '}
				<input
					type="email"
					placeholder="Email"
					className="flex justify-center absolute top-114 2xl:ml-116 xl:ml-76 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent
					firefox:focus:ring-purple-400
					firefox:placeholder:opacity-60
					webkit:autofill:bg-yellow-50"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 2xl:ml-190 xl:ml-150 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
				<h1 className="text-black flex justify-center absolute top-107 2xl:ml-205 xl:ml-162">
					{' '}
					Phone Number{' '}
				</h1>{' '}
				<input
					type="tel"
					inputMode="numeric"
					placeholder="+7 (999) 000-00-00"
					className="flex justify-center absolute top-114 2xl:ml-205 xl:ml-162 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent
					firefox:focus:ring-purple-400
					firefox:placeholder:opacity-60
					webkit:autofill:bg-yellow-50"
				/>{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 2xl:ml-298 xl:ml-257 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
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
