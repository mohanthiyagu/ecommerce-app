import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // increase quantity if exists
      } else {
        state.push({ ...action.payload, quantity: 1 }); // add new item
      }
    },

    // Remove product completely from cart
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },

    // Increase quantity
    increaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    // Decrease quantity and remove if less than 1
    decreaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          const index = state.findIndex((i) => i.id === action.payload);
          state.splice(index, 1); // remove item safely
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
