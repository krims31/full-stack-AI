import { PenLine } from 'lucide-react'

export default function ProfileSection() {
	return (
		<div>
			<div>
				{' '}
				<h1 className="flex justify-center items-center text-lg text-black absolute top-25 left-116">
					{' '}
					Profile{' '}
				</h1>{' '}
				<p className="flex justify-center items-center text-gray-600 absolute top-32 left-116">
					{' '}
					View and edit your personal profile information, including your name,
					profile picture, and role within the <br /> oranization.{' '}
				</p>{' '}
				<img
					src="./grey-business-avatar-placeholder-vector-38508162.avif"
					alt=""
					className="w-10 rounded-2xl flex justify-center items-center absolute top-46 left-116"
				/>{' '}
				<input className="flex justify-center items-center text-black absolute top-45 left-130" />{' '}
				<input className="flex justify-center items-center text-sm text-gray-600 absolute top-50 left-130" />{' '}
				<button className="flex justify-center items-center bg-gray-200 w-7 h-7 border rounded-lg absolute top-47 left-295 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 cursor-pointer duration-300 hover:scale-105 active:scale-95">
					{' '}
					<PenLine
						size={16}
						className="text-black"
					/>{' '}
				</button>{' '}
			</div>
		</div>
	)
}
