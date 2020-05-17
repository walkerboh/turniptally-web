import {
  FETCH_BOARD_LIST,
  fetchBoardListSuccessAction,
  fetchBoardListErrorAction,
  FETCH_BOARD_DETAILS,
  fetchBoardDetailsSuccessAction,
  fetchBoardDetailsErrorAction,
  fetchBoardWeeksSuccessAction,
  fetchBoardWeeksErrorAction,
  FETCH_BOARD_DETAILS_SUCCESS,
  FETCH_BOARD_PRICES,
  fetchBoardPricesSuccessAction,
  fetchBoardPricesErrorAction,
  fetchBoardPricesAction,
} from "actions/boardData.actions";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap, map, catchError, mergeMap } from "rxjs/operators";

export const fetchBoardListEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_BOARD_LIST),
    switchMap(() => {
      return ajax({
        url: `${config.API_URL}/boards`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => fetchBoardListSuccessAction(response)),
        catchError((err) => of(fetchBoardListErrorAction(err)))
      );
    })
  );

export const fetchBoardDetailsEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_BOARD_DETAILS),
    switchMap(({ payload }) => {
      const url = payload.id
        ? `${config.API_URL}/boards/${payload.id}`
        : `${config.API_URL}/boards/name/${payload.name}`;
      return ajax({
        url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => fetchBoardDetailsSuccessAction(response)),
        catchError((err) => of(fetchBoardDetailsErrorAction(err)))
      );
    })
  );

export const fetchBoardWeeksEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_BOARD_DETAILS_SUCCESS),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/boards/${payload.id}/weeks`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        mergeMap(({ response }) => {
          const actions = [fetchBoardWeeksSuccessAction(response)];

          if (response.length) {
            actions.push(
              fetchBoardPricesAction({ id: payload.id, week: response[0] })
            );
          }

          return actions;
        }),
        catchError((err) => of(fetchBoardWeeksErrorAction(err)))
      );
    })
  );

export const fetchBoardPricesEpic = (action$, _, { ajax, config }) =>
  action$.pipe(
    ofType(FETCH_BOARD_PRICES),
    switchMap(({ payload }) => {
      return ajax({
        url: `${config.API_URL}/prices/boards/${payload.id}/weeks/${payload.week}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).pipe(
        map(({ response }) => fetchBoardPricesSuccessAction(response)),
        catchError((err) => of(fetchBoardPricesErrorAction(err)))
      );
    })
  );
