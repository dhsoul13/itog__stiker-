/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Auth: {
    isAuth: false,
    isAdmin: false,
    name: '',
    email: '',
    id: ''
  }
};
const AuthSlice = createSlice(
  {
    name: 'Auth',
    initialState,
    reducers: {
      addAuth(state, action) {
        state.Auth.isAuth = true;
        state.Auth.isAdmin = action.payload.isAdmin;
        state.Auth.name = action.payload.name;
        state.Auth.email = action.payload.email;
        state.Auth.id = action.payload.id;
      },
      removeAuth(state, action) {
        state.Auth.isAuth = false;
        state.Auth.isAdmin = false;
        state.Auth.name = '';
        state.Auth.email = '';
        state.Auth.id = '';
      }
    }
  }
);

export const { addAuth, removeAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
