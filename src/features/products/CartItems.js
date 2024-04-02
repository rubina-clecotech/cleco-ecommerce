import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../constant";

const CartItems = createSlice({
    name:"cartItems",
    initialState:{
        cart:cartItems,
        total:0,
    },
    reducers:{
        IncreaseQuantity : (state,action) => {
            return{
                ...state,
                cart : state.cart.map((item) => item.id === action.payload ? {...item,quantity:item.quantity+1} : item)
            }
        },
        DecreaseQuantity : (state,action) => {
            return{
                ...state,
                cart : state.cart.map((item) => item.id === action.payload && item.quantity > 1 ? {...item,quantity:item.quantity-1} : item )
            }
        },
        RemoveItem : (state,action) => {
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
    }
})
export const {IncreaseQuantity , DecreaseQuantity, RemoveItem } = CartItems.actions
export default CartItems.reducer
