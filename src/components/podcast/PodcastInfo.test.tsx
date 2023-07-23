import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { PodcastDetails } from '@/types/podcastDetailsApi'

import PodcastInfo from './PodcastInfo'


const podcastDetails: PodcastDetails = {
  title: 'My first podcast',
  author: 'Rookie',
  description: 'Our first <b>podcast!</b>',
  image: 'https://image.provider/rookie/my-first-podcast.jpg',
  items: []
}

describe('<PodcastInfo />', () => {
  it('render the component', () => {
    const { baseElement } = render(<IntlProvider 
      locale='en' 
      messages={{ PODCAST_DESCRIPTION: 'Description', PODCAST_BY: 'By' }}
    >
      <PodcastInfo podcast={podcastDetails} />
    </IntlProvider>)

    expect(baseElement).toMatchSnapshot()
  })

  it('should display the podcast title', () => {
    render(<IntlProvider 
      locale='en' 
      messages={{ PODCAST_DESCRIPTION: 'Description', PODCAST_BY: 'By' }}
    >
      <PodcastInfo podcast={podcastDetails} />
    </IntlProvider>)

    expect(screen.getByTestId('podcast-title')).toHaveTextContent('My first podcast')
  })

  it('should display the podcast author', () => {
    render(<IntlProvider 
      locale='en' 
      messages={{ PODCAST_DESCRIPTION: 'Description', PODCAST_BY: 'By' }}
    >
      <PodcastInfo podcast={podcastDetails} />
    </IntlProvider>)

    expect(screen.getByTestId('podcast-author')).toHaveTextContent('Rookie')
  })

  it('should display the podcast description as HTML', () => {
    render(<IntlProvider 
      locale='en' 
      messages={{ PODCAST_DESCRIPTION: 'Description', PODCAST_BY: 'By' }}
    >
      <PodcastInfo podcast={podcastDetails} />
    </IntlProvider>)

    expect(screen.getByTestId('podcast-description')).toContainHTML('Our first <b>podcast!</b>')
  })

  it('should load the podcast image', () => {
    const { container } = render(<IntlProvider 
      locale='en' 
      messages={{ PODCAST_DESCRIPTION: 'Description', PODCAST_BY: 'By' }}
    >
      <PodcastInfo podcast={podcastDetails} />
    </IntlProvider>)

    expect(container.querySelector('img')).toHaveProperty('src', 'https://image.provider/rookie/my-first-podcast.jpg')
  })
})
