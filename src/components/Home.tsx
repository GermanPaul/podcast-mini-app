import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/store'
import { useFetchPodcastFeed } from '@/hooks/api/useFetchPodcastFeed'
import { setIsLoading } from '@/store/slices/podcast'

const LIMIT = 5
const GENRE = 1310

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data: podcasts, isError } = useFetchPodcastFeed({ limit: LIMIT, genre: GENRE })

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  return <div>
    <h1>Home</h1>
    <div>Loading: {JSON.stringify(isLoading)}</div>
    <div>Feed: {JSON.stringify(podcasts)}</div>
  </div>
}

export default Home
