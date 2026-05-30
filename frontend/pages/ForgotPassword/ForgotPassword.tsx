import { ArrowLeft, FingerprintPattern } from 'lucide-react'
import { Link } from 'react-router'

export default function ForgotPassword() {
	return (
		<>
			<main>
				<div className="border rounded-xl w-100 h-130 relative top-40 left-150 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 text-black">
					<div className="border rounded-md w-10 h-10 relative top-20 left-45 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0">
						<FingerprintPattern className="mt-2 ml-2" />
					</div>
					<h1 className="flex item-center justify-center mt-30 ml-5 text-2xl text-black h-screen">
						Forgot password?
					</h1>

					<p className="flex item-center justify-center -mt-196 ml-10 text-gray-600">
						No worries, we'll send you reset instructions.
					</p>

					<div>
						<p className="text-black ml-17 mt-5">Email</p>
						<input
							type="email"
							placeholder="Enter your email"
							className="border rounded-md w-70 h-9 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent ml-17 mt-1"
						/>
					</div>

					<div>
						<button className="flex item-center justify-center border rounded-md w-70 h-10 transition-all border-black/10 bg-blue-600 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95 mt-10 ml-17">
							<span className="mt-2 text-white">Reset password</span>
						</button>
					</div>

					<div>
						<Link
							to="/login"
							className="relative top-0 z-10 left-47 text-gray-600 text-sm"
						>
							<ArrowLeft className="relative z-10 top-6 right-7" />
							Back to log in{' '}
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
