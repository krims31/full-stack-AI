import { PenLine } from 'lucide-react'

export default function AccountSection() {
	return (
		<>
			{/* Account */}
			<div>
				<h1 className="flex justify-center items-center text-lg text-black absolute top-130 left-116">
					Accountы
				</h1>
				<p className="flex justify-center items-center text-gray-600 absolute top-137 left-116">
					Update your password and select your preferred language for a
					personalized expirience.
				</p>
			</div>

			{/* Password */}

			<div>
				<h1 className="text-black flex justify-center absolute top-145 left-116">
					Password
				</h1>

				<input
					type="password"
					placeholder="********"
					className="flex justify-center absolute top-152 left-116 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
				/>

				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-152 left-190 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					<PenLine
						size={16}
						className="text-black"
					/>
				</button>
			</div>

			{/* Language */}

			<div>
				<h1 className="text-black flex justify-center absolute top-145 left-205">
					Language
				</h1>

				<div className="absolute top-152 left-205 w-90 h-7 flex justify-center border rounded-md transition-all border-black/10 shadow-lg hover:shadow-xl">
					<select
						defaultValue="ru"
						className="w-full h-full bg-transparent outline-0 pl-2 text-black cursor-pointer"
					>
						<option value="ru">Russia</option>
						<option value="en">English</option>
						<option value="es">Español</option>
						<option value="zh">中文</option>
					</select>
				</div>

				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-152 left-298 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					<PenLine
						size={16}
						className="text-black"
					/>
				</button>
			</div>
		</>
	)
}
