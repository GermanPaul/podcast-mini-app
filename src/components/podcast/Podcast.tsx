import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '@/store/slices/podcast'
import { useFetchPodcastDetails } from '@/hooks/api/useFetchPodcastDetails'
import { PodcastDetails, PodcastDetailsItem } from '@/types/podcastDetailsApi'
import { useI18n } from '@/hooks/useI18n'

import PodcastInfo from '@/components/podcast/PodcastInfo'
import ItemList from '@/components/podcast/ItemList'
import Skeleton from 'react-loading-skeleton'

const Podcast = () => {
  const { t } = useI18n()
  const dispatch = useDispatch();
  const { podcastId } = useParams<{ podcastId: string }>()
  const { isLoading, data: podcastDetails, isError } = useFetchPodcastDetails(podcastId as string)

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
  }, [isLoading])

  if (isError) {
    return <div className='p-3 text-lg'>
      {t('PODCAST_ERROR')}
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

  return <div className='max-w-7xl mx-auto flex p-2'>
    <div className='basis-2/6 m-2 shrink-0'>
      {
        !!podcastDetails && (<PodcastInfo podcast={podcastDetails as PodcastDetails} />)
      }
    </div>
    <div className='basis-4/6 m-2'>
      {
        !!podcastDetails && <ItemList items={podcastDetails?.items as PodcastDetailsItem[]} podcastId={podcastId as string} />
      }
    </div>
  </div>
}

export default Podcast
