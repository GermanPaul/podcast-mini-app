export interface FetchPodcastFeedInput {
  limit: number
  genre: number
}

export interface PodcastFeed {
  id: string
  name: string
  author: string
  image: string
}
