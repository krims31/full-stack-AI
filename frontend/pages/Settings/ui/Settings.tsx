import Sidebar from '../../widgets/sidebar/ui/Sidebar'
import AccountSection from './AccountSection'
import HeaderSettings from './HeaderSettings'
import PersonalInformation from './PersonalInformation'
import ProfileSection from './ProfileSection'
import ThemeSection from './ThemeSection'

export default function Settings() {
	return (
		<>
			<div className="border rounded-xl w-200 h-180 relative top-20 left-0 placeholder:text-gray-600 transition-all border-black/10 shadow-lg hover:shadow-xl outline-0 text-black 2xl:ml-110 xl:ml-70"></div>

			<header>
				<HeaderSettings />
			</header>

			<aside>
				<Sidebar />
			</aside>

			<main>
				<ProfileSection />

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-61 2xl:ml-110 xl:ml-70 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<PersonalInformation />
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-127 2xl:ml-110 xl:ml-70 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<AccountSection />
				</div>

				<div>
					<div>
						<div className="w-200 h-0.5 absolute top-164 2xl:ml-110 xl:ml-70 shadow-sm border-t bg-gray-300 border-white"></div>
					</div>
				</div>

				<div>
					<ThemeSection />
				</div>
			</main>
		</>
	)
}
