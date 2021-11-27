import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header.jsx', () => {
  it('should render the correct header', () => {
    render(<Header />)
    const logoElement = screen.getByAltText(
      'logotipo com ilustração de avião de papel'
    )
    expect(logoElement).toBeInTheDocument()
  })
})