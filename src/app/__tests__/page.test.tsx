import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import HomePage from '../page'

// Mock ThemePageWrapper
vi.mock('@/components/theme-page-wrapper', () => ({
  default: () => <div data-testid="theme-page-wrapper">Home Page Content</div>
}))

describe('HomePage', () => {
  it('renders ThemePageWrapper with home page', () => {
    const { getByTestId } = render(<HomePage />)
    expect(getByTestId('theme-page-wrapper')).toBeInTheDocument()
  })
}) 