import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/feature/product/productSlice'
import cardReducer from "../redux/feature/card/cardSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    card: cardReducer,
  }
})

export default store

