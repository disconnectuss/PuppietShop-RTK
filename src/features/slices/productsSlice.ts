// // productsSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     try {
//       const response = await axios.get('/products');
//       return response.data;
//     } catch (error) {
//       throw Error(error.message);
//     }
//   }
// );

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchProducts.pending]: (state) => {
//       state.status = 'loading';
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.status = 'succeeded';
//       state.products = action.payload;
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message;
//     },
//   },
// });

// export default productsSlice.reducer;
