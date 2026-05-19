import { Paperclip } from 'lucide-react'
import useAI from '../../features/hooks/useAI'
export default function MainAI() {
	const { enabled, setEnabled, handleSend } = useAI()
	return (
		<>
			<img
				src="./purple-ball-png-3d-geometric-shape-transparent-background_53876-977295.jpg"
				alt="purple-circle"
				className="w-20 h-20 mb-6
						animate-spin 
						firefox:animate-pulse firefox:opacity-80 // Firefox fallback для spin
						webkit:animate-spin"
			/>

			<h1 className="text-3xl xl:text-5xl text-black font-bold leading-tight">
				Good Afternoon, Krims <br />
				<span className="text-gray-800">
					What's on{' '}
					<span
						className="
							bg-linear-to-r from-purple-400 to-purple-700 
							bg-clip-text text-transparent
							firefox:text-purple-600 firefox:bg-none
						"
					>
						your mind?
					</span>
				</span>
			</h1>

			{/* INPUT */}
			<div className="w-full flex flex-col items-center mt-10">
				<input
					type="text"
					onKeyDown={e => e.key === 'Enter' && handleSend}
					className="w-full max-w-2xl h-32 px-8 pt-1 pb-20 border rounded-2xl 
							placeholder:text-gray-600 transition-all 
							border-black/10 shadow-lg hover:shadow-xl 
							outline-0 text-black
							focus:ring-2 focus:ring-purple-500 focus:border-transparent
							firefox:focus:ring-purple-400
							firefox:placeholder:opacity-60 // Firefox fix для placeholder
							webkit:autofill:bg-yellow-50"
					placeholder="Ask AI a question or make a request..."
				/>

				{/* Attach */}
				<button
					className="relative -mt-12 mr-auto border rounded-md px-2 xl:px-3 py-1 transition-all 
						border-black/10 shadow-lg hover:shadow-xl 
						flex items-center gap-1 text-black
						hover:scale-105 active:scale-95
						xl:ml-75 2xl:ml-95 lg:ml-50 max-[1280px]:ml-40 max-sm:ml-5"
				>
					<Paperclip size={15} />
					Attach
				</button>

				{/* OPTIONS */}
				<div className="flex flex-wrap justify-center items-center gap-4 -mt-8">
					<select
						className="border rounded-md px-3 py-1 xl:px-3 transition-shadow 
							border-black/10 shadow-lg hover:shadow-xl mr-50 2xl:ml-30 max-sm:ml-55 text-black max-sm:opacity-0"
					>
						<option>Writing Styles</option>
					</select>

					{/* Toggle Switch - улучшен для Firefox */}
					<label className="flex items-center gap-2 cursor-pointer max-sm:ml-50 max-sm:-mt-15">
						<input
							type="checkbox"
							className="sr-only peer"
							checked={enabled}
							onChange={() => setEnabled(!enabled)}
						/>
						<div
							className={`
									w-11 h-6 rounded-full relative 
									2xl:mr-0 xl:ml-0 
									transition-colors duration-200 ease-in-out
									${enabled ? 'bg-violet-600' : 'bg-gray-300'}
									firefox:transition-all
								`}
						>
							<div
								className={`
										absolute top-0.5 left-0.5 w-5 h-5 bg-white 
										rounded-full transition-transform duration-200 ease-in-out
										${enabled ? 'translate-x-5' : ''}
										firefox:transition-all
									`}
							/>
						</div>
						<span className="text-sm max-sm:opacity-0">Citation</span>
					</label>
				</div>

				{/* SEND - Firefox fix для кнопки */}
				<button
					onClick={handleSend}
					className="bg-black text-white w-8 h-8 rounded-md mt-4 
							hover:scale-110 active:scale-90 transition-transform
							2xl:ml-155 2xl:-mt-7 xl:ml-150 xl:-mt-7
							firefox:active:translate-y-0.5 max-sm:ml-65 max-sm:-mt-11"
				>
					↑
				</button>
			</div>
		</>
	)
}
