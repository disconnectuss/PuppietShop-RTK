import {combineReducers} from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import categoryReducer from '../features/category/categorySlice';

export const reducers = {
  product: productReducer,
  category: categoryReducer,
};
