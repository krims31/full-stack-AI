import { ArrowLeft, CircleCheckBig } from 'lucide-react'
import { Link } from 'react-router'

export default function AllDone() {
	return (
		<>
			<main>
				<form>
					<div className="border rounded-xl lg:w-100 lg:h-130 lg:mx-auto lg:mt-30 lg:relative right-10  placeholder:text-gray-600 transition-all  border-black/10 shadow-lg hover:shadow-xl outline-0 text-black">
						<div className="border rounded-md w-10 h-10 relative top-20 left-44 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0">
							<CircleCheckBig className="mt-2 ml-2" />
						</div>
						<h1 className="flex item-center justify-center mt-25 ml-5 text-2xl text-black h-screen">
							All done!
						</h1>

						<p className="flex item-center justify-center -mt-196 ml-0 gap-1 text-gray-600">
							Your password has been reset. Would you like to <br /> set up Face
							ID as well?
						</p>

						<div>
							<button className="flex item-center justify-center border rounded-md w-80 h-10 transition-all border-black/10 bg-blue-600 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95 relative top-5 left-12">
								<span className="mt-2 text-white">Set up Face ID</span>
							</button>
						</div>

						<div>
							<button className="flex item-center justify-center border rounded-md w-80 h-10 transition-all border-black/10 bg-whit shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95 relative top-7 left-12">
								<span className="mt-2 text-black">I'll do this later</span>
							</button>
						</div>

						<div>
							<Link
								to="/login"
								className="relative top-5 z-10 left-45 text-gray-600 text-sm"
							>
								<ArrowLeft className="relative z-10 top-6 right-7" />
								Back to log in{' '}
							</Link>
						</div>
					</div>
				</form>
			</main>

			<footer>
				<Link to="/forgotten-password">
					<div className="border rounded-2xl w-20 h-3 relative top-30 left-155 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/password-reset">
					<div className="border rounded-2xl w-20 h-3 relative top-27 left-180 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/set-new-password">
					<div className="border rounded-2xl w-20 h-3 relative top-24 left-205 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>

				<Link to="/all-done">
					<div className="border rounded-2xl w-20 h-3 relative top-21 left-230 hover:bg-blue-500 bg-gray-200 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 z-10"></div>
				</Link>
			</footer>
		</>
	)
}
