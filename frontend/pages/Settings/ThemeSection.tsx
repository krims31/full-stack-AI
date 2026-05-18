export default function ThemeSection() {
	return (
		<>
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
		</>
	)
}
