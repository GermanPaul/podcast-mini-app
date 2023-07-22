import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchPodcastFeed } from '@/hooks/api/useFetchPodcastFeed'
import { setIsLoading } from '@/store/slices/podcast'
import { useI18n } from '@/hooks/useI18n';

import PodcastCard from '@/components/home/PodcastCard'
import { PodcastFeed } from '@/types/podcastList';

const LIMIT = import.meta.env.VITE_PODCASTS_LIMIT
const GENRE = import.meta.env.VITE_PODCASTS_GENRE_ID

const Home = () => {
  const { t } = useI18n();
  const dispatch = useDispatch();

  const { isLoading, data: podcasts, isError } = useFetchPodcastFeed({ limit: LIMIT, genre: GENRE })
  const [searchValue, setSearchValue] = useState('')
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastFeed[]>([])
  const [matches, setMatches] = useState(0)

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
  }, [searchValue])

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  return <div className=''>
    <div className='flex justify-end p-4'>
      <div className='inline-flex border p-2 mr-2 rounded-lg bg-sky-500 text-white'>{matches}</div>
      <input 
        type='text'
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
