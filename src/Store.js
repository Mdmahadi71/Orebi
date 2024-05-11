import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/CounterState'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})