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
import { switchMap, catchError, mergeMap } from "rxjs/operators";
import { fetchBoardDetailsAction } from "actions";

export const createBoardEpic = (action$, _, { ajax, push, config }) =>
  action$.pipe(
    ofType(CREATE_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/boards`,
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
          of(
            createBoardSuccessAction(response),
            push(`/board/${payload.urlName}`)
          )
        ),
        catchError((err) => of(createBoardErrorAction(err)))
      );
    })
  );

export const joinBoardEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(JOIN_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/boards/${payload.id}/users`,
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
