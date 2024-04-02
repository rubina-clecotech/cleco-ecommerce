import { createSlice } from "@reduxjs/toolkit";
const CartItems = createSlice({
  name: "cartItems",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    IncreaseQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    },
    DecreaseQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    },
    RemoveItem: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    addToCart: (state, action) => {
      const repeatedItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (repeatedItem !== -1) {
        state.cart[repeatedItem].quantity += 1;
      } else {
        state.cart.unshift(action.payload);
      }
    },
  },
});
export const { IncreaseQuantity, DecreaseQuantity, RemoveItem, addToCart } = CartItems.actions;
export default CartItems.reducer;
