import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Django + Vite + React' })).toBeInTheDocument()
  })

  it('increments the counter when clicked', () => {
    render(<App />)
    const counterButton = screen.getByRole('button', { name: /count is 0/i })

    fireEvent.click(counterButton)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
