import { ArrowLeft, RectangleEllipsis } from 'lucide-react'
import { Link } from 'react-router'

export default function SetNewPassword() {
	return (
		<>
			<main>
				<div className="border rounded-xl w-110 h-130 relative top-40 left-150 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 text-black">
					<div className="border rounded-md w-10 h-10 relative top-20 left-52 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0">
						<RectangleEllipsis className="mt-2 ml-2" />
					</div>
					<h1 className="flex item-center justify-center mt-25 ml-5 text-2xl text-black h-screen">
						Set new password
					</h1>

					<p className="flex item-center justify-center -mt-196 ml-0 gap-1 text-gray-600">
						Must be at least 8 characters.
					</p>

					<div>
						<p className="text-black ml-20 mt-5">Password</p>
						<input
							type="password"
							placeholder="*******"
							className="border rounded-md w-70 h-9 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent ml-20 mt-1"
						/>
					</div>

					<div>
						<p className="text-black ml-20 mt-5">Confirm password</p>
						<input
							type="password"
							placeholder="*******"
							className="border rounded-md w-70 h-9 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 pl-2 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent ml-20 mt-1"
						/>
					</div>

					<div>
						<button className="flex item-center justify-center border rounded-md w-70 h-10 transition-all border-black/10 bg-blue-600 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95 relative top-5 left-20">
							<span className="mt-2 text-white">Reset password</span>
						</button>
					</div>

					<div>
						<Link
							to="/login"
							className="relative top-5 z-10 left-50 text-gray-600 text-sm"
						>
							<ArrowLeft className="relative z-10 top-6 right-7" />
							Back to log in{' '}
						</Link>
					</div>
				</div>
			</main>

			<footer>
				<Link to="/forgotten-password">
					<div className="border rounded-2xl w-20 h-3 relative top-60 left-155 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/password-reset">
					<div className="border rounded-2xl w-20 h-3 relative top-57 left-180 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/set-new-password">
					<div className="border rounded-2xl w-20 h-3 relative top-54 left-205 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/all-done">
					<div className="border rounded-2xl w-20 h-3 relative top-51 left-230 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>
			</footer>
		</>
	)
}
