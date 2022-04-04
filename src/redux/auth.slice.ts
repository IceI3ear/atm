import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface InitialStateType {
  isLogin: boolean;
}

const initialState: InitialStateType = {
  isLogin: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsLogin = (state: RootState) => state.auth.isLogin;
