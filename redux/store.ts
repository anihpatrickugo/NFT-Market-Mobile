import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/redux/slices/themeSlice'
import contractsReducer from '@/redux/slices/contractsSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contracts: contractsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch