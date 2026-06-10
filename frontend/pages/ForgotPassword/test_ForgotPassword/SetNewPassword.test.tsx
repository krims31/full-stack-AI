import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import SetNewPassword from '../SetNewPassword/SetNewPassword'

describe('SetNewPassword Component', () => {
	const renderComponent = () =>
		render(
			<MemoryRouter>
				<SetNewPassword />
			</MemoryRouter>
		)

	it('should render set new password', () => {
		renderComponent()

		const heading = screen.getByRole('heading', {
			name: /set new password/i
		})

		expect(heading).toBeInTheDocument()
	})

	it('should render description', () => {
		renderComponent()

		const description = screen.getByText(/must be at least 8 characters/i)

		expect(description).toBeInTheDocument()
	})

	it('should render 2 inputs', () => {
		renderComponent()

		const inputs = screen.getAllByPlaceholderText(/\*{7}/)

		expect(inputs.length).toBe(2)
	})

	it('should render button', () => {
		renderComponent()

		const button = screen.getByRole('button', {
			name: /reset password/i
		})

		expect(button).toBeInTheDocument()
	})

	it('contains navigation links', () => {
		renderComponent()

		const loginLink = screen.getByRole('link', {
			name: /back to log in/i
		})

		expect(loginLink).toHaveAttribute('href', '/login')
	})
})
