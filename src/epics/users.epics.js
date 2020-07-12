import { ofType } from "redux-observable";
import { of, EMPTY } from "rxjs";
import {
  switchMap,
  map,
  catchError,
  tap,
  switchMapTo,
  mergeMap,
} from "rxjs/operators";
import {
  LOGIN,
  loginSuccessAction,
  loginErrorAction,
  REGISTER,
  registerSuccessAction,
  registerErrorAction,
  LOGOUT,
  FETCH_TIMEZONES,
  fetchTimezonesSuccessAction,
  fetchTimezonesErrorAction,
  SUBMIT_BUY_PRICE,
  submitBuyPriceSuccessAction,
  submitBuyPriceErrorAction,
  SUBMIT_SELL_PRICE,
  submitSellPriceSuccessAction,
  submitSellPriceErrorAction,
  FETCH_USER_DETAILS,
  fetchUserDetailsSuccessAction,
  fetchUserDetailsErrorAction,
  FETCH_USER_WEEK_DETAILS,
  fetchUserWeekDetailsSuccessAction,
  fetchUserWeekDetailsErrorAction,
  fetchUserWeekDetailsAction,
  SEND_PASSWORD_RESET_EMAIL,
  sendPasswordResetEmailSuccessAction,
  sendPasswordResetEmailErrorAction,
} from "actions/users.actions";

export const loginEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(LOGIN),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/users/authenticate`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).pipe(
        map(({ response }) => {
          localStorage.setItem("user", JSON.stringify(response));
          localStorage.setItem("token", response.token);
          return loginSuccessAction(response);
        }),
        catchError(err => of(loginErrorAction(err)))
      );
    })
  );

export const registerEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(REGISTER),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/users/register`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).pipe(
        map(({ response }) => registerSuccessAction(response)),
        catchError(err => of(registerErrorAction(err)))
      );
    })
  );

export const logoutEpic = action$ =>
  action$.pipe(
    ofType(LOGOUT),
    tap(() => localStorage.removeItem("user")),
    switchMapTo(EMPTY)
  );

export const fetchTimezonesEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_TIMEZONES),
    switchMap(() => {
      return ajax({
        url: `${config.API_URL}/users/timezones`,
        method: "GET",
      }).pipe(
        map(({ response }) => fetchTimezonesSuccessAction(response)),
        catchError(err => of(fetchTimezonesErrorAction(err)))
      );
    })
  );

export const submitBuyPriceEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(SUBMIT_BUY_PRICE),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/prices/users/${payload.userId}/buy`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: {
          date: payload.date,
          price: payload.price,
        },
      }).pipe(
        map(({ response }) => submitBuyPriceSuccessAction(response)),
        catchError(err => of(submitBuyPriceErrorAction(err)))
      );
    })
  );

export const submitSellPriceEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(SUBMIT_SELL_PRICE),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/prices/users/${payload.userId}/sell`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: {
          date: payload.date,
          price: payload.price,
          day: payload.day,
          period: payload.period,
        },
      }).pipe(
        map(({ response }) => submitSellPriceSuccessAction(response)),
        catchError(err => of(submitSellPriceErrorAction(err)))
      );
    })
  );

export const fetchUserWeeksEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_USER_DETAILS),
    switchMap(() => {
      return ajax({
        url: `${config.API_URL}/users`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        mergeMap(({ response }) => {
          const actions = [fetchUserDetailsSuccessAction(response)];

          if (response.weeks.length) {
            actions.push(
              fetchUserWeekDetailsAction({ date: response.weeks[0] })
            );
          }

          return actions;
        }),
        catchError(err => of(fetchUserDetailsErrorAction(err)))
      );
    })
  );

export const fetchUserWeekDetailsEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_USER_WEEK_DETAILS),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/prices/users/weeks/${payload.date}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => fetchUserWeekDetailsSuccessAction(response)),
        catchError(err => of(fetchUserWeekDetailsErrorAction(err)))
      );
    })
  );

export const sendPasswordResetEmailEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(SEND_PASSWORD_RESET_EMAIL),
    tap(() => console.log("ahhhh")),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/users/passwordResetEmail`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).pipe(
        map(() => sendPasswordResetEmailSuccessAction()),
        catchError(() => of(sendPasswordResetEmailErrorAction()))
      );
    })
  );
