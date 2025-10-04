import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

// Mock global CSS import
vi.mock('@/styles/globals.css', () => ({}))

// Mocks must be before imports
vi.mock('geist/font/sans', () => ({
  GeistSans: {
    variable: 'geist-sans-variable'
  }
}))

vi.mock('@/components/theme-provider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}))

import RootLayout from '../layout'

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
}) 