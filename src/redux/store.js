import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/cartSlice"
import booksApi from "./book/booksApi";

const Store = configureStore({

    reducer: {
        cart: CartSlice,
        [booksApi.reducerPath]: booksApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware),
})
export default Store


