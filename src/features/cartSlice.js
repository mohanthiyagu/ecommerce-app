import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",

initialState,
  reducers: {

    addToCart: (state, action) => {
  const product = action.payload;
  const existing = state.find(item => item.id === product.id);
  if (!existing) {
    state.push({ ...product, quantity: 1 });
  }

},

    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },

    increaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          const index = state.findIndex((i) => i.id === action.payload);
          state.splice(index, 1); 
        }
      }
    },
  },
});

export const persistCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
    if (action.type.startsWith("cart/")) {
    const cart = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
    return result;
};

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
