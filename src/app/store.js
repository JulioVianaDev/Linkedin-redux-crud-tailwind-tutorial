import { configureStore } from '@reduxjs/toolkit'
import carsReducer from '../Features/Cars/CarSlice';
export const store = configureStore({
  reducer: {
    cars: carsReducer
  },
})