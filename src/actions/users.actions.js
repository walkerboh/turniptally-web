export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGOUT = "LOGOUT";

export const FETCH_TIMEZONES = "FETCH_TIMEZONES";
export const FETCH_TIMEZONES_SUCCESS = "FETCH_TIMEZONES_SUCCESS";
export const FETCH_TIMEZONES_ERROR = "FETCH_TIMEZONES_ERROR";

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const loginSuccessAction = (payload) => ({
  type: LOGIN_SUCCESS,
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
  type: REGISTER_SUCCESS,
  payload,
});

export const registerErrorAction = (payload) => ({
  type: REGISTER_ERROR,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const fetchTimezonesAction = () => ({
  type: FETCH_TIMEZONES,
});

export const fetchTimezonesSuccessAction = (payload) => ({
  type: FETCH_TIMEZONES_SUCCESS,
  payload,
});

export const fetchTimezonesErrorAction = () => ({
  type: FETCH_TIMEZONES_ERROR,
});
