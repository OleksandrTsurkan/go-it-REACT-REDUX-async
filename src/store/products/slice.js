import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getAllProducts, getProduct } from './thunks';
import {
  handleFullfilled,
  handleFullfilledAll,
  handleFullfilledSingle,
  handlePending,
  handleRejected,
} from './helpers';

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
      .addCase(getProduct.fulfilled, handleFullfilledSingle)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFullfilled
      );
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilterAction } = productsSlice.actions;
