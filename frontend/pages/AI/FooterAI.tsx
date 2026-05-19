import { Code, Mail, MessageCircle, User } from 'lucide-react'

export default function FooterAI() {
	return (
		<>
			<p
					className="uppercase text-black font-mono text-center mb-6 
					2xl:mr-80 2xl:-mt-5 2xl:-ml-2 xl:-ml-85 xl:-mt-5
					firefox:tracking-wider"
				>
					{' '}
					Get started with an example below
				</p>

				<div className="grid grid-cols-1 xl:w-200 xl:ml-50 2xl:w-200 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:ml-70">
					<Card
						text="Write a to-do list for a personal project"
						icon={<User className="text-black" />}
					/>
					<Card
						text="Generate an email to reply to a job offer"
						icon={<Mail className="text-black" />}
					/>
					<Card
						text="Summarize this article in one paragraph"
						icon={<MessageCircle className="text-black" />}
					/>
					<Card
						text="How does AI work in a technical capacity"
						icon={<Code className="text-black" />}
					/>
				</div>
				<img
					src="./ai-black.png"
					alt="ai-black"
					className="2xl:-mt-75 2xl:ml-94 2xl:w-4 xl:w-4 xl:-mt-75 xl:ml-74
						firefox:opacity-80 max-sm:-mt-176 max-sm:ml-2 max-sm:w-4"
				/>
		</>
	)
}

function Card({ text, icon }: { text: string; icon: React.ReactNode }) {
	return (
		<div
			className="border rounded-md bg-gray-100 p-4 transition-all 
			border-black/10 shadow-lg hover:shadow-xl h-28 
			flex flex-col justify-between
			hover:scale-105 active:scale-95 cursor-pointer
			firefox:hover:shadow-md firefox:transition-all
			webkit:hover:shadow-2xl"
		>
			<p className="firefox:leading-relaxed">{text}</p>{' '}
			<div className="firefox:[&>svg]:w-5 firefox:[&>svg]:h-5"> {icon}</div>
		</div>
	)
}
