import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ThemePageWrapper from '@/components/theme-page-wrapper'
import * as utils from '@/lib/utils'

vi.mock('@/lib/utils', () => ({
  getDefaultTheme: vi.fn(() => 'default')
}))

vi.mock('@/components/theme-loader', () => ({
  default: () => <div>Loading theme...</div>
}))

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