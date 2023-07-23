export interface PodcastDetails {
  title: string
  author: string
  description: string
  image: string
  items: PodcastDetailsItem[]
}

export interface PodcastDetailsItem {
  id: string
  title: string
  date: string
  duration: string
  description: string
  url: string
}

export interface RawPodcastDetails {
  title: string;
  description: string;
  image?: { url: string };
  'itunes:author': string;
  'itunes:image': { href: string }
  item: RawPodcastDetailsItem[]
}

export interface RawPodcastDetailsItem {
  title: string;
  pubDate: string;
  'itunes:duration'?: string;
  description: string;
  enclosure: { url: string }
  guid: { '#text': string } | string
}

export interface PodcastDetailsApiResponse {
  resultCount: number
  results: Result[]
}

export interface Result {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  contentAdvisoryRating: string
  artworkUrl600: string
  genreIds: string[]
  genres: string[]
}
