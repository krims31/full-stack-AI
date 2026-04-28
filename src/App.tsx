import { BrowserRouter, Route, Routes } from 'react-router'
import { ProtectedRoutes } from '../frontend/app/providers/routes/ProtectedRoutes'
import LoginPages from '../frontend/pages/LoginPages'
import UserPanel from '../frontend/pages/UserPanel'
import './App.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={<LoginPages />}
					/>
					<Route
						path="/"
						element={
							<ProtectedRoutes>
								<UserPanel />
							</ProtectedRoutes>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
