const { createSlice } = require('@reduxjs/toolkit');
const { registrationThunk } = require('./thunk');

const initialState = {
  token: '',
  profile: null,
};

const handleRegister = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registrationThunk.fulfilled, handleRegister);
  },
});

export const authReducer = authSlice.reducer;
