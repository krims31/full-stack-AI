import axios from 'axios'
import { UserCheck } from 'lucide-react'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import type { Inputs } from '../../../entities/user/types'

export default function RegisterPages() {
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>()

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<Inputs> = async data => {
		try {
			const response = await axios.post(
				'https://full-stack-ai-6uq7.onrender.com/api/auth/register',
				{
					email: data.email,
					password: data.password,
					username: data.username
				}
			)

			console.log('Registration success:', response.data)

			navigate('/login')
		} catch (error) {
			console.error('ERROR', error)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f0f14] via-[#151521] to-[#1d1135] px-4 sm:px-6 lg:px-8">
			<div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10"></div>

			<div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-md sm:max-w-lg bg-white/10 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-6"
			>
				{/* TITLE */}
				<header className="text-center">
					<h1 className="text-3xl sm:text-4xl font-bold text-white">
						Create an Account?
					</h1>
				</header>

				{/* USERNAME */}
				<div className="flex flex-col gap-1">
					<div className="relative">
						<input
							{...register('username', {
								required: 'Username is required'
							})}
							placeholder="Username"
							className={`w-full border p-3 pl-10 rounded-xl text-black focus:outline-blue-500 ${
								errors.username
									? 'border-red-500'
									: 'bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500'
							}`}
						/>

						<UserCheck
							className="absolute left-2.5 top-3 text-white"
							size={30}
						/>
					</div>

					{errors.username && (
						<span className="text-red-500 text-sm">
							{errors.username.message}
						</span>
					)}
				</div>

				{/* EMAIL */}
				<div className="flex flex-col gap-1">
					<div className="relative">
						<input
							{...register('email', {
								required: 'Email is required'
							})}
							placeholder="Email"
							className={`w-full border p-3 pl-10 rounded-xl text-black focus:outline-blue-500 ${
								errors.email
									? 'border-red-500'
									: 'bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500'
							}`}
						/>

						<MdOutlineMailOutline
							className="absolute left-2 top-3 text-white"
							size={30}
						/>
					</div>

					{errors.email && (
						<span className="text-red-500 text-sm">{errors.email.message}</span>
					)}
				</div>

				{/* PASSWORD */}
				<div className="flex flex-col gap-1">
					<div className="relative">
						<input
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length 6 symbols'
								}
							})}
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
							className={`w-full border p-3 pl-10 pr-10 rounded-xl text-black focus:outline-blue-500 ${
								errors.password
									? 'border-red-500'
									: 'bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500'
							}`}
						/>

						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="relative -top-9 left-2 text-white"
						>
							<AiOutlineEyeInvisible size={30} />
						</button>
					</div>

					{errors.password && (
						<span className="text-red-500 text-sm">
							{errors.password.message}
						</span>
					)}
				</div>

				<div>
					<input
						type="checkbox"
						className="relative -top-9.5 z-10"
					/>
					<span className="relative -top-9.5 left-3 text-white">
						I agree to the{' '}
						<Link
							to="/"
							className="text-blue-600 underline"
						>
							Terms of Service
						</Link>
					</span>
				</div>

				{/* SUBMIT */}
				<button
					type="submit"
					className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-black/80 transition-colors relative top-5"
				>
					Create account
				</button>

				{/* DIVIDER */}
				<div className="flex items-center gap-2">
					<div className="w-full h-px bg-gray-300 relative top-5"></div>
					<p className="text-gray-500 text-sm relative top-5">OR</p>
					<div className="w-full h-px bg-gray-300 relative top-5"></div>
				</div>

				{/* SOCIAL */}
				<div className="flex gap-4 justify-center items-center">
					<button className="p-2 hover:bg-gray-100 rounded-full transition">
						<img
							src="./meta-6871457_1280.webp"
							alt="Meta"
							className="w-9 h-9"
						/>
					</button>

					<button className="p-2 hover:bg-gray-100 rounded-full transition">
						<img
							src="./google.png"
							alt="Google"
							className="w-9 h-9"
						/>
					</button>
				</div>
			</form>
		</div>
	)
}
