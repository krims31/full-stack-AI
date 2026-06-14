import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from '../features/hooks/useAuth'
import Ai from '../pages/AI'
import AllDone from '../pages/ForgotPassword/AllDone/AllDone'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import PasswordReset from '../pages/ForgotPassword/PasswordReset/PasswordReset'
import SetNewPassword from '../pages/ForgotPassword/SetNewPassword/SetNewPassword'
import LoginPages from '../pages/login/ui/LoginPages'
import RegisterPages from '../pages/login/ui/RegisterPages'
import Settings from '../pages/Settings/Settings'
import Support from '../pages/Support/Support'
import Bot from '../pages/widgets/sidebar/pages for icon/Bot'
import Chat from '../pages/widgets/sidebar/pages for icon/Chat'
import Database from '../pages/widgets/sidebar/pages for icon/DataBase'
import Folder from '../pages/widgets/sidebar/pages for icon/Folder'
import Git from '../pages/widgets/sidebar/pages for icon/Git'
import History from '../pages/widgets/sidebar/pages for icon/History'
import Sidebar from '../pages/widgets/sidebar/ui/Sidebar'
import { ProtectedRoutes } from './providers/routes/ProtectedRoutes'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {
	useAuth()

	return (
		<>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/login"
							element={<LoginPages />}
						/>
						<Route
							path="/register"
							element={<RegisterPages />}
						/>
						<Route
							path="/forgotten-password"
							element={<ForgotPassword />}
						/>
						<Route
							path="/password-reset"
							element={<PasswordReset />}
						/>
						<Route
							path="/set-new-password"
							element={<SetNewPassword />}
						/>

						<Route
							path="/all-done"
							element={<AllDone />}
						/>
						<Route
							path="/"
							element={
								<ProtectedRoutes>
									<Ai />
									<Sidebar />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/chat"
							element={
								<ProtectedRoutes>
									<Chat />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/history"
							element={
								<ProtectedRoutes>
									<History />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/bot"
							element={
								<ProtectedRoutes>
									<Bot />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/folder"
							element={
								<ProtectedRoutes>
									<Folder />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/git"
							element={
								<ProtectedRoutes>
									<Git />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/database"
							element={
								<ProtectedRoutes>
									<Database />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/headphones"
							element={
								<ProtectedRoutes>
									<Support />
								</ProtectedRoutes>
							}
						/>

						<Route
							path="/settings"
							element={
								<ProtectedRoutes>
									<Settings />
								</ProtectedRoutes>
							}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</>
	)
}

export default App
