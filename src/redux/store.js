import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/cartSlice"
import booksApi from "./book/booksApi";
import ordersApi from "./orders/ordersApi";

const Store = configureStore({

    reducer: {
        cart: CartSlice,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware)
})
export default Store


