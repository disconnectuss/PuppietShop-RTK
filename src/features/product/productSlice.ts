import {createSlice} from '@reduxjs/toolkit';
import type {ProductType} from '../../types';
import type {PayloadAction} from '@reduxjs/toolkit';
interface InitialState {
  products: ProductType[];
}

const initialState: InitialState = {
  products: [],
};

const {actions, reducer} = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const {setProduct} = actions;
export default reducer;
