import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Feed } from '@/types/podcast'

interface PodcastFeedState {
  isLoading: boolean
}

const initialState: PodcastFeedState = {
  isLoading: false
}

const podcastFeedSlice = createSlice({
  name: 'podcastFeed',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state = { ...state, isLoading: action.payload}
    }
  }
})

export const { setIsLoading } = podcastFeedSlice.actions

export default podcastFeedSlice.reducer
