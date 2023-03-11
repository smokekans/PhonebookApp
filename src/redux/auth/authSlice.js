import { createSlice } from '@reduxjs/toolkit';
import {
  registrationUser,
  logIn,
  logOut,
  fetchCurrentUser,
} from './authThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggerIn: false,
  isRefreshed: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggerIn = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggerIn = true;
      state.error = null;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.error = `${payload}`;
    },

    [logOut.fulfilled]: () => {
      return initialState;
    },

    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isRefreshed = true;
    },
  },
});

export const authReducer = authSlice.reducer;
