import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constant";

const ProductList = createSlice({
  name: "productList",
  initialState: {
    productList: products,
    filteredProducts: products,
  },
  reducers: {
    filterCleanser: (state, action) => {
      return {
        ...state,
        filteredProducts: state.productList.filter((item) =>
          item.category.includes(action.payload)
        ),
      };
    },
    SearchProduct : (state,action) => {
      return{
        ...state,
        filteredProducts:state.productList.filter((item)=>
        item.title.trim().toLowerCase()===action.payload.trim().toLowerCase() || 
        item.category.trim().toLowerCase()===action.payload.trim().toLowerCase()
        )
      }
    }
  },
});

export const { filterCleanser,SearchProduct} = ProductList.actions;
export default ProductList.reducer;
