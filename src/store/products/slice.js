import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getAllProducts, getProduct } from './thunks';
import { handleFullfilledAll, handleFullfilledSingle } from './helpers';

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.fulfilled, handleFullfilledAll)
      .addCase(getProduct.fulfilled, handleFullfilledSingle);
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterAction } = productsSlice.actions;
