import { configureStore } from '@reduxjs/toolkit'
import podcastFeedReducer from '@/store/slices/podcast'

export const store = configureStore({
  reducer: {
    podcastFeed: podcastFeedReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
