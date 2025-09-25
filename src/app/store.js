import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer,{persistCartMiddleware} from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(persistCartMiddleware)
});
