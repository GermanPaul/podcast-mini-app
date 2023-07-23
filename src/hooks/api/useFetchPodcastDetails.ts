import { PodcastDetails, PodcastDetailsApiResponse, RawPodcastDetails } from '@/types/podcastDetailsApi'
import { useQuery } from '@tanstack/react-query'
import { XMLParser } from 'fast-xml-parser'

const getPodcastDetails = async (podcastId: string) => {
  try {
    const developmentMode = import.meta.env.DEV
    const apiUrl = import.meta.env.VITE_PODCASTS_API_URL
    const proxyUrl = import.meta.env.VITE_CORS_PROXY

    const path = `/lookup?id=${podcastId}`
    let itunesUrl: string

    if (developmentMode) {
      itunesUrl = `/api${path}`
    } else {
      const targetUrl = `${apiUrl}${path}`
      itunesUrl = proxyUrl ? `${proxyUrl}?${encodeURIComponent(targetUrl)}` : targetUrl
    }

    const itunesResponse = await fetch(itunesUrl)
    const itunesJsonResponse = await itunesResponse.json() as PodcastDetailsApiResponse
    
    const rawFeedUrl = itunesJsonResponse.results[0].feedUrl
    const feedUrl = proxyUrl ? `${proxyUrl}?${encodeURIComponent(rawFeedUrl)}` : rawFeedUrl

    const feedResponse = await fetch(feedUrl)
    return await feedResponse.text()
  } catch {
    throw new Error('Unable to fetch Podcast details.')
  }
}

const transformPodcastDetails: (rawPodcastDetails: string) => PodcastDetails = (rawPodcastDetails) => {
  const parser  = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: ''
  })
  const rawPodcastDetailsObject = parser.parse(rawPodcastDetails).rss.channel as RawPodcastDetails

  return {
    title: rawPodcastDetailsObject.title,
    author: rawPodcastDetailsObject['itunes:author'],
    description: rawPodcastDetailsObject.description,
    image: rawPodcastDetailsObject.image?.url || rawPodcastDetailsObject['itunes:image'].href as string,
    items: rawPodcastDetailsObject.item.map(item => {
      const id = typeof item.guid === 'string' ? item.guid : item.guid['#text']

      return {
        id,
        title: item.title,
        date: item.pubDate,
        duration: item['itunes:duration'] as string,
        description: item.description,
        url: item.enclosure?.url
      }
    })
  }
}

export const useFetchPodcastDetails = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcasts', podcastId],
    queryFn: () => getPodcastDetails(podcastId),
    select: transformPodcastDetails
  })
}
