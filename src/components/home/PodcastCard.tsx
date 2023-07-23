import React from 'react'
import { Link } from 'react-router-dom';
import { PodcastFeed } from '@/types/podcastList'

interface HomeProps {
  podcast: PodcastFeed
}

const PodcastCard = ({ podcast }: HomeProps) => {
  return <Link to={`/podcast/${podcast.id}`} className='w-80 text-center m-2 shadow-none hover:shadow-lg'>
    <div className='block mx-auto rounded-full w-44'>
      <img className='mx-auto rounded-full -mb-20' height='170px' width='170px' src={podcast.image} alt={podcast.name} loading='lazy' />
    </div>
    <div className='block border border-t-0 px-2 pt-24 pb-5'>
      <div className='uppercase font-semibold'>{podcast.name}</div>
      <div>{podcast.author}</div>
    </div>
  </Link>
}

export default PodcastCard
