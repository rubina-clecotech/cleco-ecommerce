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
  },
});

export const { filterCleanser } = ProductList.actions;
export default ProductList.reducer;
