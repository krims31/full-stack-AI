import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../frontend/app/providers/routes/ProtectedRoutes'
import { ThemeProvider } from '../frontend/app/providers/ThemeProvider'
import useAuth from '../frontend/features/hooks/useAuth'
import Ai from '../frontend/pages/AI'
import AllDone from '../frontend/pages/ForgotPassword/AllDone/AllDone'
import ForgotPassword from '../frontend/pages/ForgotPassword/ForgotPassword'
import PasswordReset from '../frontend/pages/ForgotPassword/PasswordReset/PasswordReset'
import SetNewPassword from '../frontend/pages/ForgotPassword/SetNewPassword/SetNewPassword'
import LoginPages from '../frontend/pages/LoginPages'
import RegisterPages from '../frontend/pages/RegisterPages'
import Settings from '../frontend/pages/Settings/Settings'
import Support from '../frontend/pages/Support/Support'
import Bot from '../frontend/pages/widgets/sidebar/pages for icon/Bot'
import Chat from '../frontend/pages/widgets/sidebar/pages for icon/Chat'
import Database from '../frontend/pages/widgets/sidebar/pages for icon/DataBase'
import Folder from '../frontend/pages/widgets/sidebar/pages for icon/Folder'
import Git from '../frontend/pages/widgets/sidebar/pages for icon/Git'
import History from '../frontend/pages/widgets/sidebar/pages for icon/History'
import Sidebar from '../frontend/pages/widgets/sidebar/ui/Sidebar'
import './App.css'

function App() {
	useAuth()
	console.log('Current API URL:', import.meta.env.VITE_API_URL)

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
