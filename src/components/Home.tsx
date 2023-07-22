import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'

const Home = () => {
  const feed = useSelector((state: RootState) => state.podcastFeed)

  return <div>
    <h1>Home</h1>
    <div>Feed: { JSON.stringify(feed.value) }</div>
  </div>
}

export default Home
