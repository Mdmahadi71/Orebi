import { configureStore } from '@reduxjs/toolkit'
import Productslice from './counter/Productslice'
// import Productslice from './counter/Productslice'

export const store = configureStore({
  reducer: {
     product:Productslice
  },
})