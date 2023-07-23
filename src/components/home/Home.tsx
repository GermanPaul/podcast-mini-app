import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchPodcastFeed } from '@/hooks/api/useFetchPodcastFeed'
import { setIsLoading } from '@/store/slices/podcast'
import { useI18n } from '@/hooks/useI18n'

import PodcastCard from '@/components/home/PodcastCard'
import { PodcastFeed } from '@/types/podcastList'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LIMIT = import.meta.env.VITE_PODCASTS_LIMIT
const GENRE = import.meta.env.VITE_PODCASTS_GENRE_ID

const Home = () => {
  const { t } = useI18n();
  const dispatch = useDispatch();

  const { isLoading, data: podcasts, isError } = useFetchPodcastFeed({ limit: LIMIT, genre: GENRE })
  const [searchValue, setSearchValue] = useState('')
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastFeed[]>([])
  const [matches, setMatches] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (podcasts) {
      const filteredData = podcasts.filter((podcast) => {
        const podcastName = podcast.name.toLowerCase()
        const podcastAuthor = podcast.author.toLowerCase()
        const search = searchValue.toLowerCase()

        return podcastName.includes(search) || podcastAuthor.includes(search)
      })
      setFilteredPodcasts(filteredData)
      setMatches(filteredData.length)
    }
  }, [searchValue, podcasts])

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [isLoading])

  if (isError) {
    return <div className='p-3 text-lg'>
      Unable to fetch Top Podcasts list.
    </div>
  }

  if (isLoading) {
    return <div>
      <div className='flex justify-end p-4'>
        <Skeleton width='20rem animate-pulse' height='2.5rem' />
      </div>
      <div className='flex flex-wrap justify-center p-4'>
        {
          [...Array(20)].map((_, index) => (
            <Skeleton className='m-2 animate-pulse' key={`skeleton-${index}`} width='20rem' height='15rem' />
          ))
        }
      </div>
    </div>
  }

  return <div>
    <div className='flex justify-end p-4'>
      <div className='inline-flex border p-2 mr-2 rounded-lg bg-sky-500 text-white'>{matches}</div>
      <input 
        type='text'
        ref={searchInputRef}
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={t('search')} 
        className='border w-80 h-10 p-2'
      />
    </div>
    <div className='flex flex-wrap justify-center p-4'>
      {filteredPodcasts?.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  </div>
}

export default Home
