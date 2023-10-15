import { createSlice } from '@reduxjs/toolkit';
import { handleFullfilled, handlePending, handleRejected } from './helpers';

const initialState = {
  isLoading: false,
  error: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFullfilled
      );
  },
});

export const appReducer = appSlice.reducer;
