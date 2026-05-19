import { Plus, Search, UserRoundPlus } from 'lucide-react'

export default function HeaderAI() {
	return (
		<>
			<header className="flex items-center justify-between px-4 xl:px-20 py-4 text-black">
				<div className="flex items-center gap-4">
					<select
						className="border rounded-md px-6 py-1 transition-shadow
             border-black/10 shadow-lg hover:shadow-xl outline-0 sm:relative md:top-0"
					>
						<option>ChatGPT 4o</option>
						<option>Claude Code</option>
						<option>DeepSeek</option>
						<option>Gemini 1.5</option>
						<option>Grok 4.20</option>
					</select>

					<img
						src="./ai.png"
						alt="ai"
						className="w-4 max-[1280px]:ml-0 xl:-ml-40"
					/>
				</div>

				<div className="flex items-center gap-2 xl:gap-3">
					<button className="flex items-center gap-2 border rounded-md px-2 xl:px-3 py-1 transition-all border-black/10 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
						<Search size={16} />
						<span className="hidden xl:inline">Search thread</span>
					</button>

					<button className="flex items-center gap-2 border rounded-md px-2 xl:px-3 py-1 transition-all border-black/10 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
						<UserRoundPlus size={16} />
						<span className="hidden xl:inline">Invite</span>
					</button>

					<button className="flex items-center gap-2 bg-black text-white rounded-md px-2 xl:px-3 py-1 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
						<Plus size={16} />
						<span>New Thread</span>
					</button>
				</div>
			</header>
		</>
	)
}
