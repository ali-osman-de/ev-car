import { configureStore } from '@reduxjs/toolkit'
import compareReducer from '../features/compareEV/compareSlice'

export const store = configureStore({
    reducer: {
        compare: compareReducer
    },
})