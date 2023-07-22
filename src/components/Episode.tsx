import React from 'react'
import { useParams } from 'react-router-dom'

const Episode = () => {
  const { podcastId, episodeId } = useParams<{ podcastId: string, episodeId: string }>()

  return <h1>Podcast: {podcastId}, Episode: {episodeId}</h1>
}

export default Episode
