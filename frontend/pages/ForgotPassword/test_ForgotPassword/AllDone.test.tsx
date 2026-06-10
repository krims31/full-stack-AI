import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import AllDone from '../AllDone/AllDone'

describe('AllDone Component', () => {
	const renderComponent = () =>
		render(
			<MemoryRouter>
				<AllDone />
			</MemoryRouter>
		)

	it('should render reset password', () => {
		renderComponent()

		const heading = screen.getByRole('heading', {
			name: /all done!/i
		})

		expect(heading).toBeInTheDocument()
	})

	it('should render description', () => {
		renderComponent()

		const description = screen.getByText(/your password has been reset/i)

		expect(description).toBeInTheDocument()
	})

	it('contains face id buttons', () => {
		renderComponent()

		expect(
			screen.getByRole('button', {
				name: /set up face id/i
			})
		).toBeInTheDocument()

		expect(
			screen.getByRole('button', {
				name: /i'll do this later/i
			})
		).toBeInTheDocument()
	})

	it('contains navigation links', () => {
		renderComponent()

		const loginLink = screen.getByRole('link', {
			name: /back to log in/i
		})

		expect(loginLink).toHaveAttribute('href', '/login')
	})
})
