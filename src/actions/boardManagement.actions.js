export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_SUCCESS = "CREATE_BOARD_SUCCESS";
export const CREATE_BOARD_ERROR = "CREATE_BOARD_ERROR";
export const CREATE_BOARD_RESET = "CREATE_BOARD_RESET";

export const createBoardAction = (payload) => ({
  type: CREATE_BOARD,
  payload,
});

export const createBoardSuccessAction = (payload) => ({
  type: CREATE_BOARD_SUCCESS,
  payload,
});

export const createBoardErrorAction = (payload) => ({
  type: CREATE_BOARD_ERROR,
  payload,
});

export const createBoardResetAction = () => ({
  type: CREATE_BOARD_RESET,
});
