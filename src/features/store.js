import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./products/CartItems";
import ProductReducer from "./products/ProductList";

const store = configureStore({
    reducer:{
        cartItems : CartReducer,
        productList : ProductReducer,
    }
})

export default store;
