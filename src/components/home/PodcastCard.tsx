import React from 'react'
import { Link } from 'react-router-dom';
import { PodcastFeed } from '@/types/podcastList'

interface HomeProps {
  podcast: PodcastFeed
}

const PodcastCard = ({ podcast }: HomeProps) => {
  return <div className='w-80 p-2 text-center m-2'>
    <div>
      <Link to={`/podcast/${podcast.id}`} className='block mx-auto rounded-full w-44'>
        <img className='mx-auto rounded-full -mb-20' height='170px' width='170px' src={podcast.image} alt={podcast.name} loading='lazy' />
      </Link>
    </div>
    <Link to={`/podcast/${podcast.id}`} className='block border border-t-0 px-2 pt-24 pb-5'>
      <div className='uppercase font-semibold'>{podcast.name}</div>
      <div>{podcast.author}</div>
    </Link>
  </div>
}

export default PodcastCard
