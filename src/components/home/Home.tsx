import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchPodcastFeed } from '@/hooks/api/useFetchPodcastFeed'
import { setIsLoading } from '@/store/slices/podcast'
import PodcastCard from '@/components/home/PodcastCard'

const LIMIT = import.meta.env.VITE_PODCASTS_LIMIT
const GENRE = import.meta.env.VITE_PODCASTS_GENRE_ID

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data: podcasts, isError } = useFetchPodcastFeed({ limit: LIMIT, genre: GENRE })

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  return <div>
    <h1>Home</h1>
    <div>Loading: {JSON.stringify(isLoading)}</div>
    <div className='flex flex-wrap justify-center p-4'>
      {podcasts?.map((podcast) => (
        <PodcastCard podcast={podcast} />
      ))}
    </div>
  </div>
}

export default Home
