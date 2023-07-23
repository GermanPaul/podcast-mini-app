import Home from '@/components/home/Home'
import Podcast from '@/components/podcast/Podcast'
import Episode from '@/components/episode/Episode'
import { Navigate } from 'react-router-dom'

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
  },
  {
    path: '*',
    element: (<Navigate to="/" />)
  }
]

export default routes
