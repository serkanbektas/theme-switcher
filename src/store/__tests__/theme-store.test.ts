import { describe, it, expect } from 'vitest'
import { useThemeStore } from '../theme-store'

describe('theme-store', () => {
  it('initializes with default theme', () => {
    const store = useThemeStore.getState()
    expect(store.theme).toBe('default')
  })

  it('updates theme when setTheme is called', () => {
    const store = useThemeStore.getState()
    store.setTheme('dark')
    expect(useThemeStore.getState().theme).toBe('dark')
  })

  it('maintains state between updates', () => {
    const store = useThemeStore.getState()
    store.setTheme('spring')
    expect(useThemeStore.getState().theme).toBe('spring')
    store.setTheme('default')
    expect(useThemeStore.getState().theme).toBe('default')
  })
}) 