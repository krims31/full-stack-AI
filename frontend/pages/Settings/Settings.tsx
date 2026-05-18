import Sidebar from '../widgets/sidebar/ui/Sidebar'
import AccountSection from './AccountSection'
import ProfileSection from './ProfileSection'
import ThemeSection from './ThemeSection'
import PersonalInformation from './PersonalInformation'

export default function Settings() {
	return (
		<>
			<div className="border rounded-xl w-200 h-180 relative top-20 left-110 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 text-black"></div>

			<header>
				<div className="flex justify-center items-center">
					<h1 className="absolute top-4 left-110 text-xl text-black">
						Settings
					</h1>
					<p className="absolute top-11 left-110 text-sm text-gray-600">
						Customize your profile, personal information, password, language and
						theme settings
					</p>
				</div>
			</header>

			<aside>
				<Sidebar />
			</aside>

			<main>
				<ProfileSection />

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-61 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<PersonalInformation />
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-127 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<AccountSection />
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-164 left-110 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<ThemeSection />
				</div>
			</main>
		</>
	)
}
