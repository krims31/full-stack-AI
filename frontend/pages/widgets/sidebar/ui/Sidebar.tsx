import {
	Bot,
	Database,
	FolderClosed,
	GitBranch,
	Headphones,
	History,
	House,
	Menu,
	MessageCircle,
	Settings,
	X
} from 'lucide-react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserMenu from '../../../../shared/lib/ui/UserMenu'

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const navigate = useNavigate()

	return (
		<>
			{/* BURGER MENU */}
			<button
				onClick={() => setIsOpen(true)}
				className="
					fixed top-4 left-4 z-50
					bg-white p-2 rounded-lg shadow-lg
					2xl:hidden
				"
			>
				<Menu size={22} />
			</button>

			{/* OVERLAY */}
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					className="
						fixed inset-0 bg-black/40 z-40
						2xl:hidden
					"
				/>
			)}

			{/* SIDEBAR */}
			<aside
				className={`
					border rounded-2xl
					w-15 h-208
					transition-all duration-300
					border-black/10 shadow-lg hover:shadow-xl
					outline-0 bg-white
					
					fixed top-0 left-0 z-50

					${isOpen ? 'translate-x-0' : '-translate-x-full'}

					2xl:translate-x-0
					2xl:absolute
					2xl:top-0
					2xl:left-0
				`}
			>
				{/* CLOSE BUTTON */}
				<button
					onClick={() => setIsOpen(false)}
					className="absolute top-4 right-4 2xl:hidden"
				>
					<X size={22} />
				</button>

				{/* LOGO */}
				<img
					src="./ai-icon-circle-png.webp"
					alt="ai"
					className="absolute top-3 left-2 w-10 h-10"
				/>

				{/* TOP ICONS */}
				<div className="flex flex-col items-center gap-4 mt-20 mr-1">
					{[
						{ icon: House, path: '/' },
						{ icon: MessageCircle, path: '/chat' },
						{ icon: History, path: '/history' },
						{ icon: Bot, path: '/bot' },
						{ icon: FolderClosed, path: '/folder' },
						{ icon: GitBranch, path: '/git' },
						{ icon: Database, path: '/database' }
					].map(({ icon: Icon, path }, index) => (
						<div
							key={index}
							onClick={() => {
								navigate(path)
								setIsOpen(false)
							}}
							className="
								relative px-4 py-2 cursor-pointer group
								before:absolute before:left-0 before:top-0 before:bottom-0 
								before:w-1 before:bg-purple-500 
								before:transform before:scale-y-0 before:transition-transform before:duration-300
								hover:before:scale-y-100
							"
						>
							<Icon className="text-gray-400 group-hover:text-purple-500 transition-colors" />
						</div>
					))}
				</div>

				{/* BOTTOM ICONS */}
				<div className="flex flex-col items-center mt-60 gap-4 mr-1">
					{[
						{ icon: Headphones, path: '/headphones' },
						{ icon: Settings, path: '/settings' }
					].map(({ icon: Icon, path }, index) => (
						<div
							key={index}
							onClick={() => {
								navigate(path)
								setIsOpen(false)
							}}
							className="
								relative px-4 py-2 cursor-pointer group
								before:absolute before:left-0 before:top-0 before:bottom-0 
								before:w-1 before:bg-purple-500 
								before:transform before:scale-y-0 before:transition-transform before:duration-300
								hover:before:scale-y-100
							"
						>
							<Icon className="text-gray-400 group-hover:text-purple-500 transition-colors" />
						</div>
					))}

					<UserMenu />
				</div>
			</aside>
		</>
	)
}
