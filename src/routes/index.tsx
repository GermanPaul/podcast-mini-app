import Home from '@/components/home/Home'
import Podcast from '@/components/podcast/Podcast'
import Episode from '@/components/episode/Episode'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/podcast/:podcastId',
    element: <Podcast />
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <Episode />
  }
]

export default routes
