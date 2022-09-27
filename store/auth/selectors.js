export function selectActiveUser(state) {
  return state.auth.selectActiveUser;
}

export function selectIsAuthenticated(state) {
  return !!state.auth.accessToken;
}

export function selectRegisterError(state) {
  return state.auth.registerError;
}

export function selectLoginError(state) {
  return state.auth.loginError;
}
