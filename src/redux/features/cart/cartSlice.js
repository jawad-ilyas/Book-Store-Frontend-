import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";


const initialState = {

    cartItems: []

}

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItems = state.cartItems.find(item => item?._id === action.payload._id)
            console.log(action?.payload)
            if (!existingItems) {
                state.cartItems.push(action?.payload)
                Swal.fire({
                    title: "Cart add succesfully",
                    icon: "success",
                    draggable: true
                });
            }
            else {
                Swal.fire({
                    title: "Item are already exits ",
                    // text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sure"
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item?._id !== action?.payload._id)
        },
        clearCart: (state, payload) => {
            state.cartItems = []
        }
    }

})

export const { addToCart , removeFromCart , clearCart } = cartSlice.actions

export default cartSlice.reducer