import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeSelector } from '@/components/theme-selector'

describe('ThemeSelector', () => {
  it('renders default theme correctly', () => {
    render(<ThemeSelector theme="default" />)
    expect(screen.getByText('Default Theme')).toBeInTheDocument()
  })

  it('renders spring theme correctly', () => {
    render(<ThemeSelector theme="spring" />)
    expect(screen.getByText('Spring Theme')).toBeInTheDocument()
  })

  it('renders dark side theme correctly', () => {
    render(<ThemeSelector theme="darkside" />)
    expect(screen.getByText('Dark Side Theme')).toBeInTheDocument()
  })
}) 