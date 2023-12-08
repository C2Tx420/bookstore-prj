import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import loadingReducer from './loading/reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch