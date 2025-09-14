import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const CardSlice = createSlice({
  name: "CardAdd",
  initialState: [],

  reducers: {
    AddToCardItem: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productId === action.payload.id
      );
      if (existingProduct) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Product Already Added!",
          footer: '<a href="#">Please try to others product?</a>',
        });
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
        });
        Swal.fire({
          title: "Product add successfully!",
          icon: "success",
          draggable: true,
        });
      }
    },

    Increasing: (state, action) => {
      const product = state.find((state) => state.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },
    Decreasing: (state, action) => {
      const product = state.find((state) => state.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },

    RemoveCard: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export const { AddToCardItem, Increasing, Decreasing, RemoveCard } =
  CardSlice.actions;
export default CardSlice.reducer;
