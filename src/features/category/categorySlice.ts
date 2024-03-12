import {createSlice} from '@reduxjs/toolkit';
import type {CategoryType} from '../../types';
import type {PayloadAction} from '@reduxjs/toolkit';
interface InitialState {
  categories: CategoryType[];
}

const initialState: InitialState = {
  categories: [],
};

const {actions, reducer} = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const {setCategories} = actions;
export default reducer;
