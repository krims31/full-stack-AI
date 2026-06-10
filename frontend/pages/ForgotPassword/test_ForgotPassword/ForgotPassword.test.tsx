import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, it } from 'vitest'
import ForgotPassword from '../ForgotPassword'

describe('should render component', () => {
	const renderComponent = () =>
		render(
			<MemoryRouter>
				<ForgotPassword />
			</MemoryRouter>
		)

	it('should render heading', () => {
		renderComponent()

		const heading = screen.getByRole('heading', {
			name: /forgot password/i
		})

		expect(heading).toBeInTheDocument()
	})

	it('should render description', () => {
		renderComponent()

		const description = screen.getByText(
			/no worries, we'll send you reset instructions/i
		)

		expect(description).toBeInTheDocument()
	})

	it('should render input', () => {
		renderComponent()

		const input = screen.getAllByPlaceholderText(/Enter your email/i)

		expect(input.length).toBe(1)
	})

	it('should render button', () => {
		renderComponent()

		const button = screen.getByRole('button', {
			name: /reset password/i
		})

		expect(button).toBeInTheDocument()
	})

	it('should render links', () => {
		renderComponent()

		const links = screen.getByRole('link', {
			name: /back to log in/i
		})

		expect(links).toHaveAttribute('href', '/login')
	})
})
