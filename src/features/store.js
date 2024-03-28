import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./products/CartItems";

const store = configureStore({
    reducer:{
        cartItems : CartReducer,
    }
})

export default store;
