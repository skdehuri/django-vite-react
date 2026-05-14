import { render, screen } from '@testing-library/react'
import App from './App'

describe('Todo App entry component', () => {
  it('renders the TODO heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'TODO APP' })).toBeInTheDocument()
  })
})
