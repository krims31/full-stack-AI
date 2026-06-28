import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import RegisterPages from '../RegisterPages'

describe('should render component', () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<RegisterPages />
			</MemoryRouter>
		)
	}

	it('should header render components', () => {
		renderComponent()

		const heading = screen.getByRole('heading', {
			name: /Create an Account?/i
		})
		expect(heading).toBeInTheDocument()
	})

	it('should input render component', () => {
		renderComponent()

		const inputUsername = screen.getAllByPlaceholderText(/Username/i)

		const inputEmail = screen.getAllByPlaceholderText(/Email/i)

		const inputPassword = screen.getAllByPlaceholderText(/Password/i)

		expect(inputEmail.length).toBe(1)
		expect(inputPassword.length).toBe(1)
		expect(inputUsername.length).toBe(1)
	})

	it('should checkbox render component', () => {
		renderComponent()

		const checkbox = screen.getAllByRole('checkbox')

		expect(checkbox).toBeInTheDocument()
	})

	it('should I agree to the render component', () => {
		renderComponent()

		const IAgree = screen.getByText(/I agree to the/i)

		expect(IAgree).toBeInTheDocument()
	})

	it('should link render component', () => {
		renderComponent()

		const termsOfService = screen.getByRole('link', {
			name: /Terms of Service/i
		})

		expect(termsOfService).toBeInTheDocument()
	})

	it('should button render component', () => {
		renderComponent()

		const button = screen.getByRole('button', {
			name: /Create account/i
		})

		expect(button).toBeInTheDocument()
	})

	it('should button meta render component', () => {
		renderComponent()

		const buttonMeta = screen.getByRole('button', {
			name: /Meta/i
		})

		expect(buttonMeta).toBeInTheDocument()
	})

	it('should button meta render component', () => {
		renderComponent()

		const buttonGoogle = screen.getByRole('button', {
			name: /google/i
		})

		expect(buttonGoogle).toBeInTheDocument()
	})
})
