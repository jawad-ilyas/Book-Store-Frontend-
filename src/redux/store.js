import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/cartSlice"

const Store = configureStore({

    reducer: {
        cart: CartSlice
    }
})
export default Store