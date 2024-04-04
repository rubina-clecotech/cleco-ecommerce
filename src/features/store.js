import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./products/CartItems";
import ProductReducer from "./products/ProductList";
import ProductDetailReducer from "./products/ProductDetail";

const store = configureStore({
    reducer:{
        cartItems : CartReducer,
        productList : ProductReducer,
        productDetail : ProductDetailReducer
    }
})

export default store;
