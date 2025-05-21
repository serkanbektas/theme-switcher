import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../theme-provider'

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('renders multiple children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>First</div>
        <div>Second</div>
      </ThemeProvider>
    )
    expect(getByText('First')).toBeInTheDocument()
    expect(getByText('Second')).toBeInTheDocument()
  })
}) 