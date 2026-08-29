import { ArrowLeft, FingerprintPattern } from 'lucide-react'
import { Link } from 'react-router'
import useForgotPassword from '../../features/hooks/useForgotPassword'

export default function ForgotPassword() {
	const { email, setEmail, loading, handleSubmit } = useForgotPassword()
	return (
		<>
			<main>
				<form onSubmit={handleSubmit}>
					<div
						className="border rounded-xl
    lg:w-100
    lg:h-130
    lg:mx-auto
    lg:mt-30
    lg:relative
		right-10
    placeholder:text-gray-600
    transition-all
    border-black/10
    shadow-lg hover:shadow-xl
    outline-0
    text-black"
					>
						<div className="border rounded-md w-10 h-10 relative top-20 left-40 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0">
							<FingerprintPattern className="mt-2 ml-2" />
						</div>
						<h1 className="flex item-center justify-center mt-25 ml-5 text-2xl lg:mt-25 text-black h-screen">
							Forgot password?
						</h1>

						<p className="flex item-center justify-center -mt-196 lg:top-10 ml-10 text-gray-600">
							No worries, we'll send you reset instructions.
						</p>

						<div>
							<p className="text-black ml-12 mt-5">Email</p>
							<input
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								placeholder="Enter your email"
								className="border rounded-md w-70 h-9 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-black focus:border-transparent ml-12 mt-1"
							/>
						</div>

						<div>
							<button
								type="submit"
								disabled={loading}
								className="flex item-center justify-center border rounded-md w-70 h-10 transition-all border-black/10 bg-blue-600 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95 mt-10 ml-12"
							>
								<span className="mt-2 text-white">
									{loading ? 'Sending...' : 'Reset password'}
								</span>
							</button>
						</div>

						<div className="flex justify-center">
							<Link
								to="/login"
								className="flex items-center text-gray-600 text-sm lg:mt-5"
							>
								<ArrowLeft
									className="mr-2"
									size={18}
								/>
								Back to log in
							</Link>
						</div>
					</div>
				</form>
			</main>

			<footer>
				<div className="border rounded-2xl w-20 h-3 relative top-30 left-150 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>

				<Link to="/password-reset">
					<div className="border rounded-2xl w-20 h-3 relative top-27 left-175 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/set-new-password">
					<div className="border rounded-2xl w-20 h-3 relative top-24 left-200 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/all-done">
					<div className="border rounded-2xl w-20 h-3 relative top-21 left-225 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>
			</footer>
		</>
	)
}
