import { put, call, takeLatest } from "redux-saga/effects";
import {
  login,
  logout,
  register,
  getActiveUser,
  setActiveUser,
  setToken,
  setRegisterError,
  setLoginError,
} from "./slice";
import authService from "../../services/AuthService";
import Router from "next/router";

function* handleRegister(action) {
  try {
    yield call(authService.register, action.payload);
    yield call(Router.push("/login"));
  } catch (error) {
    if (error?.response?.status !== 201) {
      yield put(setRegisterError(true));
    }
  }
}

function* handleLogin(action) {
  try {
    const { user, access_token } = yield call(
      authService.login,
      action.payload
    );
    yield put(setToken(access_token));
    yield put(setActiveUser(user));
    yield call(Router.push("/movies"));
  } catch (error) {
    if (error?.response?.status == 401) {
      yield put(setLoginError(true));
    }
  }
}

function* handleLogout() {
  try {
    yield call(authService.logout);
    yield put(setToken(null));
    yield put(setActiveUser(null));
  } catch (error) {
    yield put(setToken(null));
    yield put(setActiveUser(null));
    alert("Can`t logout as a guest");
  }
}

function* handleGetActiveUser() {
  try {
    const activeUser = yield call(authService.getActiveUser);
    yield put(setActiveUser(activeUser));
  } catch (error) {
    yield put(setToken(null));
    yield put(setActiveUser(null));
    console.log("Session expired");
  }
}

export function* watchLogin() {
  yield takeLatest(login.type, handleLogin);
}

export function* watchLogout() {
  yield takeLatest(logout.type, handleLogout);
}

export function* watchRegister() {
  yield takeLatest(register.type, handleRegister);
}

export function* watchGetActiveUser() {
  yield takeLatest(getActiveUser.type, handleGetActiveUser);
}
