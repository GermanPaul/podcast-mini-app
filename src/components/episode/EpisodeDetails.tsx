import React from 'react'
import { PodcastDetailsItem } from '@/types/podcastDetailsApi'

interface EpisodeDetailsProps {
  episodeDetails: PodcastDetailsItem
}

const EpisodeDetails = ({ episodeDetails }: EpisodeDetailsProps) => {
  return <div className='px-4'>
    <div className='shadow-md p-3'>
      <div className='font-bold text-2xl mb-2'>{episodeDetails.title}</div>
      <div className='mb-4' dangerouslySetInnerHTML={{__html: episodeDetails.description}}></div>
      <audio className='w-full' src={episodeDetails.url} controls></audio>
    </div>
  </div>
}

export default EpisodeDetails
