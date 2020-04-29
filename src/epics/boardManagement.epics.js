import {
  CREATE_BOARD,
  createBoardSuccessAction,
  createBoardErrorAction,
} from "actions/boardManagement.actions";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap, catchError, mergeMap } from "rxjs/operators";

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
        },
      }).pipe(
        mergeMap(({ response }) =>
          of(createBoardSuccessAction(response), push(`/${payload.urlName}`))
        ),
        catchError((err) => of(createBoardErrorAction(err)))
      );
    })
  );
