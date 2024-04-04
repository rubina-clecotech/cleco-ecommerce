import { createSlice } from "@reduxjs/toolkit";
import lipBalm from "../../assets/graphics/The LIP Balm.png"
import moisturizer from "../../assets/graphics/Rich Moisturizer.png"
const CartItems = createSlice({
  name: "cartItems",
  initialState: {
    cart: [
      {
        id:3,
        title:"The Lip Balm",
        description:"Shut down persistent pimples while being kind to your skin with Curology’s...",
        mrp:"699.00",
        price:"149.00",
        rating:4.5,
        review:96,
        qty:"100gm",
        quantity:1,
        availability:2,
        image:lipBalm,
        category:"lipcare",
      },
      {
        id:4,
        title:"Rich Moisturiser",
        description:"Shut down persistent pimples while being kind to your skin with Curology’s...",
        mrp:"699.00",
        price:"149.00",
        rating:4.5,
        review:96,
        qty:"100gm",
        quantity:1,
        availability:2,
        image:moisturizer,
        category:"moisturizer",
      },
    ],
    total: 0,
    shipping:20,
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
    confirmCheckout:(state)=>{
      return{
        ...state,
        cart:[]
      }
    },
    getTotal:(state) => {
      const total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0); 
    
      let shippingCost = 9;
      
      if (total > 20) {
        shippingCost = 0;
      }
      if (total !== state.total || shippingCost !== state.shipping) {
        return {
          ...state,
          total: total,
          shipping: shippingCost
        };
      } else {
        return state;
      }
    },
  },
});
export const { IncreaseQuantity, DecreaseQuantity, RemoveItem, addToCart,confirmCheckout,getTotal } = CartItems.actions;
export default CartItems.reducer;
