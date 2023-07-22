import React from 'react'
import { useParams } from 'react-router-dom'

const Podcast = () => {
  const { podcastId } = useParams<{ podcastId: string }>()

  return <h1>Podcast: {podcastId}</h1>
}

export default Podcast
