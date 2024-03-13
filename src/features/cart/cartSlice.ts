import {createSlice} from '@reduxjs/toolkit';
import type {ProductType} from '../../types';
import type {PayloadAction} from '@reduxjs/toolkit';
interface InitialState {
  cart: ProductType[];
}

const initialState: InitialState = {
  cart: [],
};

const {actions, reducer} = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const item = action.payload;
      const cartState = state.cart;

      const isAvailable = cartState.find(
        (stateItem: ProductType) => stateItem.id === item.id,
      );

      isAvailable ? isAvailable.quantity++ : cartState.push(item);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartState = state.cart;
      const item = cartState.find(
        (stateItem: ProductType) => stateItem.id === id,
      );

      item && item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartState = state.cart;
      const item = cartState.find(
        (stateItem: ProductType) => stateItem.id === id,
      );

      if (item && item.quantity === 1) {
        state.cart = cartState.filter(product => product.id !== id);
      } else if (item) {
        item.quantity--;
      }
    },

    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, incrementQuantity, decrementQuantity, clearCart} =
  actions;
export default reducer;
