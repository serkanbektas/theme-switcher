import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mocks must be before imports
vi.mock('@/lib/utils', () => ({
  getDefaultTheme: () => 'default'
}))

vi.mock('@/components/theme-loader', () => ({
  default: () => <div>Loading theme...</div>
}))

import ThemePageWrapper from '@/components/theme-page-wrapper'

describe('ThemePageWrapper', () => {
  it('renders loading state initially', () => {
    render(<ThemePageWrapper page="home" />)
    expect(screen.getByText('Loading theme...')).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    const customData = { title: 'Test Page' }
    render(
      <ThemePageWrapper 
        page="home" 
        data={customData}
        slug="test-slug"
      />
    )
    expect(screen.getByText('Loading theme...')).toBeInTheDocument()
  })
}) 