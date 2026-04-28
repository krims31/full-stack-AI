import { create } from 'zustand'

type AuthState = {
	isAuth: boolean
	setAuth: (value: boolean) => void
}

export const useAuthState = create<AuthState>(set => ({
	isAuth: false,
	setAuth: value => set({ isAuth: value })
}))
