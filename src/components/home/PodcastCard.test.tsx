import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PodcastFeed } from '@/types/podcastList'

import PodcastCard from './PodcastCard'

const podcastFeed: PodcastFeed = {
  id: '1',
  name: 'My first podcast',
  author: 'Rookie',
  image: 'https://image.provider/rookie/my-first-podcast.jpg'
}

describe('<PodcastCard />', () => {
  it('render the component', () => {
    const { baseElement } = render(<BrowserRouter>
      <PodcastCard podcast={podcastFeed} />
    </BrowserRouter>)

    expect(baseElement).toMatchSnapshot()
  })

  it('should implement a link to the podcast details page', () => {
    render(<BrowserRouter>
      <PodcastCard podcast={podcastFeed} />
    </BrowserRouter>)

    expect(screen.getByRole('link')).toHaveProperty('href', '/podcast/1')
  })

  it('should load the podcast image', () => {
    const { container } = render(<BrowserRouter>
      <PodcastCard podcast={podcastFeed} />
    </BrowserRouter>)

    expect(container.querySelector('img')).toHaveProperty('src', 'https://image.provider/rookie/my-first-podcast.jpg')
  })

  it('should display the podcast name', () => {
    render(<BrowserRouter>
      <PodcastCard podcast={podcastFeed} />
    </BrowserRouter>)

    expect(screen.getByTestId('podcast-name')).toHaveTextContent('My first podcast')
  })

  it('should display the podcast author', () => {
    render(<BrowserRouter>
      <PodcastCard podcast={podcastFeed} />
    </BrowserRouter>)

    expect(screen.getByTestId('podcast-author')).toHaveTextContent('Rookie')
  })
})
