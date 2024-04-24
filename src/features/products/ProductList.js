import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constant";


const initialState = {
  productList: products,
  filteredProducts: products,
  activeFilters: {
    price: null,
    discount: null,
    skinType: null,
    sortBy: null, 
  }
};

const applyFilters = (state) => {
  let filtered = [...state.productList];

  // Apply price filter
  if (state.activeFilters.price) {
    const { min, max } = state.activeFilters.price;
    filtered = filtered.filter(item => {
      const meetsMinCondition = min !== undefined ? item.price >= min : true;
      const meetsMaxCondition = max !== undefined ? item.price <= max : true;
      return meetsMinCondition && meetsMaxCondition;
    });
  }

  // Apply discount filter
  if (state.activeFilters.discount) {
    filtered = filtered.filter(item => item.discount >= state.activeFilters.discount);
  }

  // Apply skin type filter
  if (state.activeFilters.skinType) {
    filtered = filtered.filter(item => item.skinType === state.activeFilters.skinType);
  }

  // Apply sorting
  if (state.activeFilters.sortBy) {
    switch(state.activeFilters.sortBy) {
      case "popularity":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case "highPrice":
        filtered.sort((a, b) => b.price - a.price)
        break;
      case "lowPrice":
        filtered.sort((a, b) => a.price - b.price)
        break;
      default:
        break;
    }
  }

  return filtered;
};

const ProductList = createSlice({
  name: "productList",
  initialState,
  reducers: {
    filterCategories: (state, action) => {
      return {
        ...state,
        filteredProducts: state.productList.filter((item) =>
          item.category.includes(action.payload)
        ),
      };
    },
    SearchProduct : (state,action) => {
      const search=action.payload.replace(/\s/g, '').toLowerCase()
      return{
        ...state,
        filteredProducts:state.productList.filter((item)=>
        item.title.replace(/\s/g, '').toLowerCase().includes(search) || 
        item.category.replace(/\s/g, '').toLowerCase().includes(search)
        )
      }
    },
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.activeFilters[type] = value; 
      state.filteredProducts = applyFilters(state); 
    },
    clearFilters: (state) => {
      state.activeFilters = { price: null, discount: null, skinType: null, sortBy: null };
      state.filteredProducts = [...state.productList];
    },
  },
});

export const {clearFilters,setFilter,filterCategories,SearchProduct} = ProductList.actions;
export default ProductList.reducer;
