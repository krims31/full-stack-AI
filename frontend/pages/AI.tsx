import FooterAI from '../pages/AI/FooterAI'
import HeaderAI from '../pages/AI/HeaderAI'
import MainAI from '../pages/AI/MainAI'

export default function Ai() {
	return (
		<div className="min-h-screen max-w-360 mx-auto px-4  firefox:overflow-x-hidden">
			{/* HEADER */}
			<HeaderAI />

			{/* MAIN */}
			<main className="relative flex flex-col items-center text-center mt-20">
				<MainAI />
			</main>

			{/* FOOTER */}
			<footer className="mt-16">
				<FooterAI />
			</footer>
		</div>
	)
}
