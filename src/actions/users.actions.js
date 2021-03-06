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

export const SUBMIT_BUY_PRICE = "SUBMIT_BUY_PRICE";
export const SUBMIT_BUY_PRICE_SUCCESS = "SUBMIT_BUY_PRICE_SUCCESS";
export const SUBMIT_BUY_PRICE_ERROR = "SUBMIT_BUY_PRICE_ERROR";

export const SUBMIT_SELL_PRICE = "SUBMIT_SELL_PRICE";
export const SUBMIT_SELL_PRICE_SUCCESS = "SUBMIT_SELL_PRICE_SUCCESS";
export const SUBMIT_SELL_PRICE_ERROR = "SUBMIT_SELL_PRICE_ERROR";

export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const FETCH_USER_DETAILS_SUCCESS = "FETCH_USER_DETAILS_SUCCESS";
export const FETCH_USER_DETAILS_ERROR = "FETCH_USER_DETAILS_ERROR";

export const FETCH_USER_WEEK_DETAILS = "FETCH_USER_WEEK_DETAILS";
export const FETCH_USER_WEEK_DETAILS_SUCCESS =
  "FETCH_USER_WEEK_DETAILS_SUCCESS";
export const FETCH_USER_WEEK_DETAILS_ERROR = "FETCH_USER_WEEK_DETAILS_ERROR";

export const SEND_PASSWORD_RESET_EMAIL = "SEND_PASSWORD_RESET_EMAIL";
export const SEND_PASSWORD_RESET_EMAIL_SUCCESS =
  "SEND_PASSWORD_RESET_EMAIL_SUCCESS";
export const SEND_PASSWORD_RESET_EMAIL_ERROR =
  "SEND_PASSWORD_RESET_EMAIL_ERROR";

export const FETCH_PASSWORD_RESET_STATUS = "FETCH_PASSWORD_RESET_STATUS";
export const FETCH_PASSWORD_RESET_STATUS_SUCCESS =
  "FETCH_PASSWORD_RESET_STATUS_SUCCESS";
export const FETCH_PASSWORD_RESET_STATUS_ERROR =
  "FETCH_PASSWORD_RESET_STATUS_ERROR";

export const SEND_PASSWORD_RESET = "SEND_PASSWORD_RESET";
export const SEND_PASSWORD_RESET_SUCCESS = "SEND_PASSWORD_RESET_SUCCESS";
export const SEND_PASSWORD_RESET_ERROR = "SEND_PASSWORD_RESET_ERROR";

export const loginAction = payload => ({
  type: LOGIN,
  payload,
});

export const loginSuccessAction = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginErrorAction = payload => ({
  type: LOGIN_ERROR,
  payload,
});

export const registerAction = payload => ({
  type: REGISTER,
  payload,
});

export const registerSuccessAction = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerErrorAction = payload => ({
  type: REGISTER_ERROR,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const fetchTimezonesAction = () => ({
  type: FETCH_TIMEZONES,
});

export const fetchTimezonesSuccessAction = payload => ({
  type: FETCH_TIMEZONES_SUCCESS,
  payload,
});

export const fetchTimezonesErrorAction = () => ({
  type: FETCH_TIMEZONES_ERROR,
});

export const submitBuyPriceAction = payload => ({
  type: SUBMIT_BUY_PRICE,
  payload,
});

export const submitBuyPriceSuccessAction = payload => ({
  type: SUBMIT_BUY_PRICE_SUCCESS,
  payload,
});

export const submitBuyPriceErrorAction = payload => ({
  type: SUBMIT_BUY_PRICE_ERROR,
  payload,
});

export const submitSellPriceAction = payload => ({
  type: SUBMIT_SELL_PRICE,
  payload,
});

export const submitSellPriceSuccessAction = payload => ({
  type: SUBMIT_SELL_PRICE_SUCCESS,
  payload,
});

export const submitSellPriceErrorAction = payload => ({
  type: SUBMIT_SELL_PRICE_ERROR,
  payload,
});

export const fetchUserDetailsAction = () => ({
  type: FETCH_USER_DETAILS,
});

export const fetchUserDetailsSuccessAction = payload => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  payload,
});

export const fetchUserDetailsErrorAction = payload => ({
  type: FETCH_USER_DETAILS_ERROR,
  payload,
});

export const fetchUserWeekDetailsAction = payload => ({
  type: FETCH_USER_WEEK_DETAILS,
  payload,
});

export const fetchUserWeekDetailsSuccessAction = payload => ({
  type: FETCH_USER_WEEK_DETAILS_SUCCESS,
  payload,
});

export const fetchUserWeekDetailsErrorAction = payload => ({
  type: FETCH_USER_WEEK_DETAILS_ERROR,
  payload,
});

export const sendPasswordResetEmailAction = payload => ({
  type: SEND_PASSWORD_RESET_EMAIL,
  payload,
});

export const sendPasswordResetEmailSuccessAction = () => ({
  type: SEND_PASSWORD_RESET_EMAIL_SUCCESS,
});

export const sendPasswordResetEmailErrorAction = () => ({
  type: SEND_PASSWORD_RESET_EMAIL_ERROR,
});

export const fetchPasswordResetStatusAction = payload => ({
  type: FETCH_PASSWORD_RESET_STATUS,
  payload,
});

export const fetchPasswordResetStatusSuccessAction = () => ({
  type: FETCH_PASSWORD_RESET_STATUS_SUCCESS,
});

export const fetchPasswordResetStatusErrorAction = () => ({
  type: FETCH_PASSWORD_RESET_STATUS_ERROR,
});

export const sendPasswordResetAction = payload => ({
  type: SEND_PASSWORD_RESET,
  payload,
});

export const sendPasswordResetSuccessAction = () => ({
  type: SEND_PASSWORD_RESET_SUCCESS,
});

export const sendPasswordResetErrorAction = payload => ({
  type: SEND_PASSWORD_RESET,
  payload,
});
