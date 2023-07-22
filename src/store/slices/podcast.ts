import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Feed } from '@/types/podcast'

interface PodcastFeedState {
  value: Feed[]
}

const initialState: PodcastFeedState = {
  value: []
}

const podcastFeedSlice = createSlice({
  name: 'podcastFeed',
  initialState,
  reducers: {
    setPodcastFeed: (state, action: PayloadAction<Feed[]>) => {
      state.value = action.payload
    }
  }
})

export const { setPodcastFeed } = podcastFeedSlice.actions

export default podcastFeedSlice.reducer
