import { BrowserRouter } from 'react-router'
import LoginPages from '../frontend/pages/LoginPages'
import './App.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<LoginPages />
			</BrowserRouter>
		</>
	)
}

export default App
