import { useState } from 'react'
import useLogout from '../features/hooks/useLogout'

export default function UserPanel() {
	const [enabled, setEnabled] = useState(false)
	const { logout } = useLogout()
	return (
		<>
			<button
				onClick={logout}
				className="border rounded-2xl bg-red-600 w-20 h-10 text-white absolute left-400"
			>
				Logout
			</button>
			<header>
				<label>
					<select
						className="border rounded-md mt-5 ml-50 w-30 h-8 flex text-center text-black transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
					>
						<option value="1">ChatGPT 4o</option>
						<option value="2">Claude Code</option>
						<option value="3">Deepseek</option>
					</select>
				</label>
				<button
					className="border rounded-md relative -top-8 ml-300 w-30 h-8 text-black transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
				>
					Search thread
				</button>

				<button
					className="border rounded-md relative -top-16 ml-335 w-17 h-8 text-black transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
				>
					Invite
				</button>

				<button
					className="border rounded-lg bg-black relative -top-24 ml-360 w-30 h-8 text-white transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
				>
					New thread
				</button>
			</header>
			<main>
				<div>
					<h1 className="ml-170 mt-30 text-4xl text-black">
						Good Afternoon, Krims <br />
						<span className="ml-3">
							What's on <span className="text-purple-500">your mind?</span>
						</span>
					</h1>
					<div>
						<input
							type="text"
							id="user-input"
							className="mt-15 ml-130 w-160 h-40 pb-27 pl-10 border rounded-2xl placeholder:text-gray-600 transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
							placeholder="Ask AI a question or make a request..."
						/>
						<button
							className="border rounded-md relative -top-11 ml-133 w-20 h-8 text-black transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
						>
							Attach
						</button>
						<label>
							<select
								className="relative z-10 border rounded-md -mt-19 ml-157 w-30 h-8 flex text-center text-black transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl"
							>
								<option value="1">Writing Styles</option>
							</select>
						</label>
						<div className="flex items-center gap-2">
							<label className="relative inline-flex items-center cursor-pointer -mt-8 ml-250">
								<input
									type="checkbox"
									className="sr-only peer"
									checked={enabled}
									onChange={() => setEnabled(!enabled)}
								/>
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900">
									Citation
								</span>
							</label>
						</div>
						<button
							className="border bg-black rounded-md w-8 h-8 transition-shadow 
             border-black/10 shadow-lg hover:shadow-xl text-white relative z-10 -top-8 ml-278"
						>
							↑
						</button>
					</div>
				</div>
			</main>
		</>
	)
}
