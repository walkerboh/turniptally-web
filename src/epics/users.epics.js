import { ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, catchError } from "rxjs/operators";
import {
  LOGIN,
  loginSuccessAction,
  loginErrorAction,
  REGISTER,
  registerSuccessAction,
  registerErrorAction,
} from "src/epics/users.epic";

export const loginEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(LOGIN),
    ajax({
      url: "https://localhost:44383/users/register",
      method: "POST",
      body: action$.payload,
      headers: {
        "Content-Type": "application/json",
      },
    }).pipe(
      map(({ response }) => loginSuccessAction(response)),
      catchError((err) => of(loginErrorAction(err)))
    )
  );

export const registerEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(REGISTER),
    ajax({
      url: "https://localhost:44383/users/register",
      method: "POST",
      body: action$.payload,
      headers: {
        "Content-Type": "application/json",
      },
    }).pipe(
      map(({ response }) => registerSuccessAction(response)),
      catchError((err) => of(registerErrorAction(err)))
    )
  );
