export const LOGIN = "LOGIN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const loginSuccessAction = (payload) => ({
  type: LOGIN_SUCCESSFUL,
  payload,
});

export const loginErrorAction = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const registerAction = (payload) => ({
  type: REGISTER,
  payload,
});

export const registerSuccessAction = (payload) => ({
  type: REGISTER_SUCCESSFUL,
  payload,
});

export const registerErrorAction = (payload) => ({
  type: REGISTER_ERROR,
  payload,
});
