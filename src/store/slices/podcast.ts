import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Feed } from '@/types/podcastFeedApi'

interface PodcastFeedState {
  isLoading: boolean
}

const initialState: PodcastFeedState = {
  isLoading: true
}

const podcastFeedSlice = createSlice({
  name: 'podcastFeed',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setIsLoading } = podcastFeedSlice.actions

export default podcastFeedSlice.reducer
