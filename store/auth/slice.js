import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/AuthService";

const middlewareActions = {
  login() {},
  register() {},
  logout() {},
  getActiveUser() {},
};

const initialState = {
  accessToken: authService.getToken(),
  activeUser: null,
  loginError: false,
  registerError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
    setRegisterError: (state, action) => {
      state.registerError = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  setToken,
  setActiveUser,
  login,
  logout,
  register,
  getActiveUser,
  setRegisterError,
  setLoginError,
} = authSlice.actions;

export default authSlice.reducer;
