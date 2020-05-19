export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_SUCCESS = "CREATE_BOARD_SUCCESS";
export const CREATE_BOARD_ERROR = "CREATE_BOARD_ERROR";
export const CREATE_BOARD_RESET = "CREATE_BOARD_RESET";

export const JOIN_BOARD = "JOIN_BOARD";
export const JOIN_BOARD_SUCCESS = "JOIN_BOARD_SUCCESS";
export const JOIN_BOARD_ERROR = "JOIN_BOARD_ERROR";

export const LEAVE_BOARD = "LEAVE_BOARD";
export const LEAVE_BOARD_SUCCESS = "LEAVE_BOARD_SUCCESS";
export const LEAVE_BOARD_ERROR = "LEAVE_BOARD_ERROR";
export const LEAVE_BOARD_RESET = "LEAVE_BOARD_RESET";

export const DELETE_BOARD = "DELETE_BOARD";
export const DELETE_BOARD_SUCCESS = "DELETE_BOARD_SUCCESS";
export const DELETE_BOARD_ERROR = "DELETE_BOARD_ERROR";
export const DELETE_BOARD_RESET = "DELETE_BOARD_RESET";

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

export const deleteBoardAction = (payload) => ({
  type: DELETE_BOARD,
  payload,
});

export const deleteBoardSuccessAction = (payload) => ({
  type: DELETE_BOARD_SUCCESS,
  payload,
});

export const deleteBoardErrorAction = (payload) => ({
  type: DELETE_BOARD_ERROR,
  payload,
});

export const deleteBoardResetAction = (payload) => ({
  type: DELETE_BOARD_RESET,
  payload,
});

export const leaveBoardAction = (payload) => ({
  type: LEAVE_BOARD,
  payload,
});

export const leaveBoardSuccessAction = (payload) => ({
  type: LEAVE_BOARD_SUCCESS,
  payload,
});

export const leaveBoardErrorAction = (payload) => ({
  type: LEAVE_BOARD_ERROR,
  payload,
});

export const leaveBoardResetAction = (payload) => ({
  type: LEAVE_BOARD_RESET,
  payload,
});
