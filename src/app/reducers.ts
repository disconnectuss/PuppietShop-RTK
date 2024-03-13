import {combineReducers} from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import categoryReducer from '../features/category/categorySlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
