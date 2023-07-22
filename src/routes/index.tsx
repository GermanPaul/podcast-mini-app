import Home from '@/components/Home'
import Podcast from '@/components/Podcast'
import Episode from '@/components/Episode'

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
