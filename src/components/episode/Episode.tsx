import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '@/store/slices/podcast'
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails'
import { PodcastDetails } from '@/types/podcastDetailsApi'
import { useI18n } from '@/hooks/useI18n'

import PodcastInfo from '@/components/podcast/PodcastInfo'
import EpisodeDetails from '@/components/episode/EpisodeDetails'
import Skeleton from 'react-loading-skeleton'

const Episode = () => {
  const { t } = useI18n()
  const dispatch = useDispatch()
  const { podcastId, episodeId } = useParams<{ podcastId: string, episodeId: string }>()
  const { isLoading, data: podcastDetails, isError } = useFetchPodcastDetails(podcastId as string)

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  if (isError) {
    return <div className='p-3 text-lg'>
      {t('EPISODE_ERROR')}
    </div>
  }

  if (isLoading) {
    return <div className='max-w-7xl mx-auto flex p-2'>
      <div className='basis-2/6 m-2 shrink-0'>
        <Skeleton className='animate-pulse' enableAnimation={true} height='30rem' />
      </div>
      <div className='basis-4/6 m-2'>
        <Skeleton className='animate-pulse' height='30rem' />
      </div>
    </div>
  }

  const episodeData = podcastDetails.items.filter((item) => {
    return item.id === episodeId
  })

  if (episodeData.length === 0) {
    return <div className='p-3 text-lg'>
      {t('EPISODE_ERROR')}
    </div>
  }

  return <div className='max-w-7xl mx-auto flex p-2'>
    <div className='basis-2/6 m-2 shrink-0'>
      {
        !!podcastDetails && (<PodcastInfo podcast={podcastDetails as PodcastDetails} />)
      }
    </div>
    <div className='basis-4/6 m-2'>
      <EpisodeDetails episodeDetails={episodeData[0]} />
    </div>
  </div>
}

export default Episode
