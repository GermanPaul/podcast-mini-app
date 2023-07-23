import { render, screen } from '@testing-library/react'
import { PodcastDetailsItem } from '@/types/podcastDetailsApi'

import EpisodeDetails from './EpisodeDetails'


const episodeDetails: PodcastDetailsItem = {
  id: '1',
  title: 'Episode No. 1',
  date: '01/01/2023',
  duration: '01:00:00',
  description: 'Our first <b>episode!</b>',
  url: 'https://podcastprovider.podcast/1/1.mp3'
}

describe('<Episode />', () => {
  it('render the component', () => {
    const { baseElement } = render(<EpisodeDetails episodeDetails={episodeDetails} />)

    expect(baseElement).toMatchSnapshot()
  })

  it('should display the episode title', () => {
    render(<EpisodeDetails episodeDetails={episodeDetails} />)
    expect(screen.getByTestId('episode-title')).toHaveTextContent('Episode No. 1')
  })

  it('should display the episode description as HTML', () => {
    render(<EpisodeDetails episodeDetails={episodeDetails} />)
    expect(screen.getByTestId('episode-description')).toContainHTML('Our first <b>episode!</b>')
  })

  it('should load audio element from the episode url', () => {
    const { container } = render(<EpisodeDetails episodeDetails={episodeDetails} />)

    expect(container.querySelector('audio')).toHaveAttribute('src', 'https://podcastprovider.podcast/1/1.mp3')
  })
})
