import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PasswordReset from '../ForgotPassword/PasswordReset/PasswordReset'

describe('PasswordReset component', () => {
	const renderComponent = () =>
		render(
			<MemoryRouter>
				<PasswordReset />
			</MemoryRouter>
		)

	it('should render password reset', () => {
		renderComponent()
		const heading = screen.getByRole('heading', {
			name: /password reset/i
		})
		expect(heading).toBeInTheDocument()
	})

	it('should render description', () => {
		renderComponent()

		const description = screen.getByText(/we sent a code to/i)

		expect(description).toBeInTheDocument()
	})

	it('should render 4 code input', () => {
		renderComponent()

		const input = screen.getAllByRole('textbox')

		expect(input.length).toBe(4)
	})

	it('should render button', () => {
		renderComponent()

		const button = screen.getByRole('button', {
			name: /continue/i
		})

		expect(button).toBeInTheDocument()
	})

	it('should render link', () => {
		renderComponent()

		const link = screen.getByRole('link', {
			name: /back to login/i
		})

		expect(link).toHaveAttribute('href', '/login')
	})
})
