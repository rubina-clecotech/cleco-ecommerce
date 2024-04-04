import { createSlice } from "@reduxjs/toolkit";
import acneCleanser from "../../assets/graphics/Acne Cleanser.png"

const ProductDetail = createSlice({
  name: "productDetail",
  initialState: {
    product:{
        id: 1,
        title: "Acne Cleanser",
        description:
        " Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
        mrp: "699.00",
        price: "149.00",
        rating: 4.5,
        review: 96,
        qty: "100gm",
        quantity: 1,
        availability: 0,
        image: acneCleanser,
        category: "cleanser",
      },
  },
  reducers: {
    getProduct: (state, action) => {
      return {
        ...state,
        product: action.payload,
      };
    },
    IncreaseQuantity: (state) => {
        state.product.quantity++;
      },
      DecreaseQuantity: (state) => {
        if (state.product.quantity > 1) {
          state.product.quantity--; 
        }
      },
  },
});
export const { getProduct,IncreaseQuantity, DecreaseQuantity} = ProductDetail.actions;
export default ProductDetail.reducer;
