import React from 'react'
import { PodcastDetails } from '@/types/podcastDetailsApi'

interface PodcastInfoProps {
  podcast: PodcastDetails
}

const PodcastInfo = ({ podcast }: PodcastInfoProps) => {
  return <div className='p-4 shadow-md'>
    <img className='mx-auto mb-4 rounded-md w-72 h-72' src={podcast.image} alt={podcast.title} loading='lazy' />
    <div className='my-3 mx-4'>
      <div className='font-bold'>{podcast.title}</div>
      <div className='italic'>By {podcast.author}</div>
    </div>
    <div className='my-3 mx-4'>
      <div className='font-bold'>Description</div>
      <div dangerouslySetInnerHTML={{__html: podcast.description}}></div>
    </div>
  </div>
}

export default PodcastInfo
