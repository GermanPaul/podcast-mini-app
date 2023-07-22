import { TopPodcasts } from '@/types/podcastFeedApi';
import { useQuery } from '@tanstack/react-query';
import { FetchPodcastFeedInput, PodcastFeed } from '@/types/podcastList'

const getPodcastsFeed = async ({limit, genre}: FetchPodcastFeedInput) => {
  try {
    const developmentMode = import.meta.env.DEV
    const apiUrl = import.meta.env.VITE_PODCASTS_API_URL
    const proxyUrl = import.meta.env.VITE_CORS_PROXY

    const path = `/toppodcasts/limit=${limit}/genre=${genre}/json`
    let url: string

    if (developmentMode) {
      url = `/api${path}`
    } else {
      const targetUrl = `${apiUrl}${path}`
      url = proxyUrl ? `${proxyUrl}?${encodeURIComponent(targetUrl)}` : targetUrl
    }

    const response = await fetch(`${url}/toppodcasts/limit=${limit}/genre=${genre}/json`)
    return await response.json() as TopPodcasts 
  } catch {
    throw new Error('Unable to fetch Top Podcasts list.')
  }
}

const transformPodcastFeed: (rawTopPodcasts: TopPodcasts) => PodcastFeed[] = (rawTopPodcasts) => {
  return rawTopPodcasts.feed.entry.map(entry => ({
    id: entry.id.attributes['im:id'],
    name: entry['im:name'].label,
    author: entry['im:artist'].label,
    image: entry['im:image'][entry['im:image'].length - 1].label
  }))
}

export const useFetchPodcastFeed = (params: FetchPodcastFeedInput) => {
  return useQuery({
    queryKey: ['podcasts', params],
    queryFn: () => getPodcastsFeed(params),
    select: transformPodcastFeed
  })
}
