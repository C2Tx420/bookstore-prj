import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import loadingReducer from './loading/reducer'
import bookReducer from './books/reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    book: bookReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch