import { PenLine } from 'lucide-react'
import Sidebar from '../ui/Sidebar'

export default function Settings() {
	return (
		<>
			<div className="border rounded-xl w-200 h-180 relative top-20 left-110 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 text-black"></div>

			<header>
				<div className="flex justify-center items-center">
					<h1 className="absolute top-4 left-110 text-xl text-black">
						Settings
					</h1>
					<p className="absolute top-11 left-110 text-sm text-gray-600">
						Customize your profile, personal information, password, language and
						theme settings
					</p>
				</div>
			</header>

			<aside>
				<Sidebar />
			</aside>

			<main>
				<div>
					<h1 className="flex justify-center items-center text-lg text-black absolute top-25 left-116">
						Profile
					</h1>
					<p className="flex justify-center items-center text-gray-600 absolute top-32 left-116">
						View and edit your personal profile information, including your
						name, profile picture, and role within the <br /> oranization.
					</p>
					<img
						src="./grey-business-avatar-placeholder-vector-38508162.avif"
						alt=""
						className="w-10 rounded-2xl flex justify-center items-center absolute top-46 left-116"
					/>
					<p className="flex justify-center items-center text-black absolute top-45 left-130">
						John Daves
					</p>
					<p className="flex justify-center items-center text-sm text-gray-600 absolute top-50 left-130">
						Frontend Developer
					</p>
					<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-47 left-295 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
						<PenLine
							size={16}
							className="text-black"
						/>
					</button>
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-61 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<h1 className="flex justify-center items-center text-lg text-black absolute top-65 left-116">
						Personal Information
					</h1>
					<p className="flex justify-center items-center text-gray-600 absolute top-72 left-116">
						Manage your information details, including username, birthdate,
						email, and phone number, to ensure your <br /> account is up to
						date.
					</p>

					{/* Username */}

					<h1 className="text-black flex justify-center absolute top-87 left-116">
						Username
					</h1>

					<input
						type="text"
						placeholder="Username"
						className="flex justify-center absolute top-94 left-116 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
					/>

					<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 left-190 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
						<PenLine
							size={16}
							className="text-black"
						/>
					</button>

					{/* Birthdate */}

					<h1 className="text-black flex justify-center absolute top-87 left-205">
						Birthdate
					</h1>

					<input
						type="date"
						placeholder=""
						className="flex justify-center absolute top-94 left-205 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
					/>

					<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-94 left-298 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
						<PenLine
							size={16}
							className="text-black"
						/>
					</button>

					{/* Email */}

					<h1 className="text-black flex justify-center absolute top-107 left-116">
						Email
					</h1>

					<input
						type="email"
						placeholder="Email"
						className="flex justify-center absolute top-114 left-116 border rounded-md w-70 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
					/>

					<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 left-190 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
						<PenLine
							size={16}
							className="text-black"
						/>
					</button>

					{/* Phone Number */}

					<h1 className="text-black flex justify-center absolute top-107 left-205">
						Phone Number
					</h1>

					<input
						type="tel"
						inputMode="numeric"
						placeholder="+7 (999) 000-00-00"
						className="flex justify-center absolute top-114 left-205 border rounded-md w-90 h-7 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600"
					/>

					<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-114 left-298 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
						<PenLine
							size={16}
							className="text-black"
						/>
					</button>
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-127 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				{/* Account */}
				<div>
					<h1 className="flex justify-center items-center text-lg text-black absolute top-130 left-116">
						Account
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

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-165 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				{/* Theme */}

				<div>
					<div className="border rounded-lg w-40 h-25 border-black/10 shadow-lg hover:shadow-xl outline-0 flex justify-center items-center absolute top-167 left-116 bg-gray-100">
						<img
							src=""
							alt="light-mode"
						/>
					</div>

					<div className="border rounded-lg w-40 h-25 border-black/10 shadow-lg hover:shadow-xl outline-0 flex justify-center items-center absolute top-167 left-190 bg-gray-100">
						<img
							src=""
							alt="black-mode"
						/>
					</div>

					<div className="border rounded-lg w-40 h-25 border-black/10 shadow-lg hover:shadow-xl outline-0 flex justify-center items-center absolute top-167 left-250 bg-gray-100">
						<img
							src=""
							alt="custom-mode"
						/>
					</div>

					<div>
						<input
							type="radio"
							className="relative top-12 left-117"
						/>
						<p className="relative top-6.5 left-123 text-black">Light Mode</p>
					</div>

					<div>
						<input
							type="radio"
							className="relative top-0.5 left-192"
						/>
						<p className="relative -top-5 left-198 text-black">Black Mode</p>
					</div>

					<div>
						<input
							type="radio"
							className="absolute top-193 left-252"
						/>
						<p className="relative -top-11 left-258 text-black">Custom</p>
					</div>
				</div>
			</main>
		</>
	)
}
