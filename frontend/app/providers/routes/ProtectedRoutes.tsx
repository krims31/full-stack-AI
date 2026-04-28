import { Navigate } from 'react-router-dom'
import { useAuthState } from '../../../features/auth/state'

type Props = {
	children: JSX.Element
}

export const ProtectedRoutes = ({ children }: Props) => {
	const isAuth = useAuthState(state => state.isAuth)

	if (!isAuth) {
		return <Navigate to="/login" />
	}
	return children
}
