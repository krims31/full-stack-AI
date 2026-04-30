import { useNavigate } from 'react-router-dom';
import { useAuthState } from './../auth/state';
export default function useLogout() {
	const { setAuth } = useAuthState(state => state)
	const navigate = useNavigate()

	const logout = () => {
		localStorage.removeItem('token')
		setAuth(false)
		navigate('/login')
	}

	return {
		logout
	}
}