import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import LoginPages from '../LoginPages'

describe('should render component', () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<LoginPages />
			</MemoryRouter>
		)
	}

	it('should header render components', () => {
		renderComponent()

		const heading = screen.getByRole('heading', {
			name: /Sign In/i
		})
		expect(heading).toBeInTheDocument()
	})

	it('should input render component', () => {
		renderComponent()

		const inputEmail = screen.getAllByPlaceholderText(/Email/i)

		const inputPassword = screen.getAllByPlaceholderText(/Password/i)

		expect(inputEmail.length).toBe(1)
		expect(inputPassword.length).toBe(1)
	})

	it("should forgot password render component", () => {
		renderComponent()
		
		const forgotPassword = screen.getByRole('link', {
			name: /Forgot Password?/i
		})
		
		expect(forgotPassword).toBeInTheDocument()
	})

	it('should button render component', () => {
		renderComponent()

		const button = screen.getByRole('button', {
			name: /Sign in/i
		})

		expect(button).toBeInTheDocument()
	})

	it("should button meta render component", () => {
		renderComponent()

		const buttonMeta = screen.getByRole('button', {
			name: /Meta/i
		})

		expect(buttonMeta).toBeInTheDocument()
	})

	it("should button meta render component", () => {
		renderComponent()

		const buttonGoogle = screen.getByRole('button', {
			name: /google/i
		})

		expect(buttonGoogle).toBeInTheDocument()
	})

	it("should new here render component", () => {
		renderComponent()

		const newHere = screen.getByText(/New here?/i)

		expect(newHere).toBeInTheDocument()
	})

	it('should footer link render component', () => {
		renderComponent()

		const footerLink = screen.getByRole('link', {
			name: /Register/i
		})

		expect(footerLink).toBeInTheDocument()
	})
})
