export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_SUCCESS = "CREATE_BOARD_SUCCESS";
export const CREATE_BOARD_ERROR = "CREATE_BOARD_ERROR";
export const CREATE_BOARD_RESET = "CREATE_BOARD_RESET";

export const JOIN_BOARD = "JOIN_BOARD";
export const JOIN_BOARD_SUCCESS = "JOIN_BOARD_SUCCESS";
export const JOIN_BOARD_ERROR = "JOIN_BOARD_ERROR";

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

export const joinBoardAction = (payload) => ({
  type: JOIN_BOARD,
  payload,
});

export const joinBoardSuccessAction = (payload) => ({
  type: JOIN_BOARD_SUCCESS,
  payload,
});

export const joinBoardErrorAction = (payload) => ({
  type: JOIN_BOARD_ERROR,
  payload,
});
