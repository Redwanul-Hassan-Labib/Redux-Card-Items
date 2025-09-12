import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/feature/product/productSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
  }
})

export default store

