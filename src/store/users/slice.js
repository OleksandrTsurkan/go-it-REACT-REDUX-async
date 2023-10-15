import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from 'api/users';
import { handleFullfilledAll } from './helpers';

const initialState = {
  users: null,
};

export const getUsersThunk = createAsyncThunk('users/getUsers', () =>
  getUsers()
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUsersThunk.fulfilled, handleFullfilledAll);
  },
});

export const userReducer = usersSlice.reducer;
