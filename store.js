import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './featureds/basketSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})