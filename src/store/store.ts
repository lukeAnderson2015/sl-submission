import { configureStore } from '@reduxjs/toolkit'
import sortingReducer from './sortingConfigSlice';

export default configureStore({
  reducer: {
    sortingConfig: sortingReducer
  },
})