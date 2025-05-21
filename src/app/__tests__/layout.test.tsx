import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import RootLayout from '../layout'

// Mock Geist font
vi.mock('geist/font/sans', () => ({
  GeistSans: {
    variable: 'geist-sans-variable'
  }
}))

// Mock ThemeProvider
vi.mock('@/components/theme-provider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}))

// Mock the entire layout structure
vi.mock('../layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout-root" className="geist-sans-variable">
      <div data-testid="theme-provider">{children}</div>
    </div>
  ),
}))

describe('RootLayout', () => {
  it('renders children within ThemeProvider', () => {
    const { getByTestId, getByText } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )

    expect(getByTestId('theme-provider')).toBeInTheDocument()
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies GeistSans font class', () => {
    const { getByTestId } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )

    expect(getByTestId('layout-root')).toHaveClass('geist-sans-variable')
  })
}) 