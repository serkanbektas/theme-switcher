import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'

// Mock ThemePageWrapper - must be before imports
vi.mock('@/components/theme-page-wrapper', () => ({
  default: () => <div data-testid="theme-page-wrapper">Home Page Content</div>
}))

import HomePage from '../page'

describe('HomePage', () => {
  it('renders ThemePageWrapper with home page', () => {
    const { getByTestId } = render(<HomePage />)
    expect(getByTestId('theme-page-wrapper')).toBeInTheDocument()
  })
}) 