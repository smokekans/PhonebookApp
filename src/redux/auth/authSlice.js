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
  // isCurrentUserLoading: false,
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
      // state.isCurrentUserLoading = false;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggerIn = true;
      state.error = null;
      // state.error = null;
      // state.isCurrentUserLoading = false;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.error = `${payload}`;
    },

    [logOut.fulfilled]: () => {
      return initialState;
      // state.user = { name: null, email: null };
      // state.token = null;
      // state.isLoggerIn = false;
      // state.isCurrentUserLoading = false;
      // state.error = null;
    },

    // [fetchCurrentUser.pending]: state => {
    //   state.isCurrentUserLoading = true;
    // },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      // state.isLoggerIn = true;
      // state.isCurrentUserLoading = false;
      state.isRefreshed = true;
    },
    // [fetchCurrentUser.rejected]: state => {
    //   state.isCurrentUserLoading = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
