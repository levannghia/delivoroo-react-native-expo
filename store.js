import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './featureds/basketSlice'
import restaurantReducer from './featureds/restaurantSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  },
})