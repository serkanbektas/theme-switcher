import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ThemeLoader from '@/components/theme-loader'

// Mock theme components
vi.mock('@/themes/default', () => ({
  DefaultHome: () => <div>Default Home</div>,
  DefaultVideos: () => <div>Default Videos</div>,
  DefaultVideoDetail: ({ params }: { params: { slug: string } }) => (
    <div>Default Video Detail: {params.slug}</div>
  ),
}))

vi.mock('@/themes/spring', () => ({
  SpringHome: () => <div>Spring Home</div>,
  SpringVideos: () => <div>Spring Videos</div>,
  SpringVideoDetail: ({ params }: { params: { slug: string } }) => (
    <div>Spring Video Detail: {params.slug}</div>
  ),
}))

vi.mock('@/themes/darkside', () => ({
  DarksideHome: () => <div>Darkside Home</div>,
  DarksideVideos: () => <div>Darkside Videos</div>,
  DarksideVideoDetail: ({ params }: { params: { slug: string } }) => (
    <div>Darkside Video Detail: {params.slug}</div>
  ),
}))

describe('ThemeLoader', () => {
  it('renders default home page', () => {
    render(<ThemeLoader page="home" theme="default" />)
    expect(screen.getByText('Default Home')).toBeInTheDocument()
  })

  it('renders spring home page', () => {
    render(<ThemeLoader page="home" theme="spring" />)
    expect(screen.getByText('Spring Home')).toBeInTheDocument()
  })

  it('renders darkside home page', () => {
    render(<ThemeLoader page="home" theme="darkside" />)
    expect(screen.getByText('Darkside Home')).toBeInTheDocument()
  })

  it('renders default videos page', () => {
    render(<ThemeLoader page="videos" theme="default" />)
    expect(screen.getByText('Default Videos')).toBeInTheDocument()
  })

  it('renders video detail page with slug', () => {
    render(<ThemeLoader page="video-detail" theme="default" slug="test-video" />)
    expect(screen.getByText('Default Video Detail: test-video')).toBeInTheDocument()
  })

  it('renders invalid page type message when slug is missing for video-detail', () => {
    render(<ThemeLoader page="video-detail" theme="default" />)
    expect(screen.getByText('Invalid page type')).toBeInTheDocument()
  })
}) 