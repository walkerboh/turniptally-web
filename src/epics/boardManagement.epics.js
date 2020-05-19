import {
  CREATE_BOARD,
  createBoardSuccessAction,
  createBoardErrorAction,
  JOIN_BOARD,
  joinBoardSuccessAction,
  joinBoardErrorAction,
  DELETE_BOARD,
  deleteBoardSuccessAction,
  deleteBoardErrorAction,
  LEAVE_BOARD,
  leaveBoardSuccessAction,
  leaveBoardErrorAction,
} from "actions/boardManagement.actions";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap, catchError, map, mergeMap } from "rxjs/operators";
import { fetchBoardDetailsAction, fetchBoardListAction } from "actions";

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
            fetchBoardListAction(),
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
            fetchBoardListAction(),
            fetchBoardDetailsAction({ id: payload.id })
          )
        ),
        catchError((err) => of(joinBoardErrorAction(err)))
      );
    })
  );

export const deleteBoardEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(DELETE_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/boards/${payload.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => deleteBoardSuccessAction(response)),
        catchError((err) => of(deleteBoardErrorAction(err)))
      );
    })
  );

export const leaveBoardEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(LEAVE_BOARD),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/boards/${payload.boardId}/users/${payload.userId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => leaveBoardSuccessAction(response)),
        catchError((err) => of(leaveBoardErrorAction(err)))
      );
    })
  );
