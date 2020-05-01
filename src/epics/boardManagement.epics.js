import {
  CREATE_BOARD,
  createBoardSuccessAction,
  createBoardErrorAction,
  JOIN_BOARD,
  joinBoardSuccessAction,
  joinBoardErrorAction,
} from "actions/boardManagement.actions";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap, catchError, mergeMap, map } from "rxjs/operators";
import { fetchBoardDetailsAction } from "actions";

export const createBoardEpic = (action$, _, { ajax, push }) =>
  action$.pipe(
    ofType(CREATE_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `https://localhost:44383/boards`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: {
          displayName: payload.displayName,
          urlName: payload.urlName,
          private: payload.privateBoard,
          userDisplayName: payload.userDisplayName,
          password: payload.password,
        },
      }).pipe(
        mergeMap(({ response }) =>
          of(createBoardSuccessAction(response), push(`/${payload.urlName}`))
        ),
        catchError((err) => of(createBoardErrorAction(err)))
      );
    })
  );

export const joinBoardEpic = (action$, _, { ajax }) =>
  action$.pipe(
    ofType(JOIN_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `https://localhost:44383/boards/${payload.id}/users`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: payload,
      }).pipe(
        mergeMap(({ response }) =>
          of(
            joinBoardSuccessAction(response),
            fetchBoardDetailsAction({ id: payload.id })
          )
        ),
        catchError((err) => of(joinBoardErrorAction(err)))
      );
    })
  );
