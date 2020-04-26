export const FETCH_BOARD_LIST = "FETCH_BOARD_LIST";
export const FETCH_BOARD_LIST_SUCCESS = "FETCH_BOARD_LIST_SUCCESS";
export const FETCH_BOARD_LIST_ERROR = "FETCH_BOARD_LIST_ERROR";

export const FETCH_BOARD_DETAILS = "FETCH_BOARD_DETAILS";
export const FETCH_BOARD_DETAILS_SUCCESS = "FETCH_BOARD_DETAILS_SUCCESS";
export const FETCH_BOARD_DETAILS_ERROR = "FETCH_BOARD_DETAILS_ERROR";

export const FETCH_BOARD_WEEKS = "FETCH_BOARD_WEEKS";
export const FETCH_BOARD_WEEKS_SUCCESS = "FETCH_BOARD_WEEKS_SUCCESS";
export const FETCH_BOARD_WEEKS_ERROR = "FETCH_BOARD_WEEKS_ERROR";

export const FETCH_BOARD_PRICES = "FETCH_BOARD_PRICES";
export const FETCH_BOARD_PRICES_SUCCESS = "FETCH_BOARD_PRICES_SUCCESS";
export const FETCH_BOARD_PRICES_ERROR = "FETCH_BOARD_PRICES_ERROR";

export const fetchBoardListAction = (payload) => ({
  type: FETCH_BOARD_LIST,
  payload,
});

export const fetchBoardListSuccessAction = (payload) => ({
  type: FETCH_BOARD_LIST_SUCCESS,
  payload,
});

export const fetchBoardListErrorAction = (payload) => ({
  type: FETCH_BOARD_LIST_ERROR,
  payload,
});

export const fetchBoardDetailsAction = (payload) => ({
  type: FETCH_BOARD_DETAILS,
  payload,
});

export const fetchBoardDetailsSuccessAction = (payload) => ({
  type: FETCH_BOARD_DETAILS_SUCCESS,
  payload,
});

export const fetchBoardDetailsErrorAction = (payload) => ({
  type: FETCH_BOARD_DETAILS_ERROR,
  payload,
});

export const fetchBoardWeeksAction = (payload) => ({
  type: FETCH_BOARD_WEEKS,
  payload,
});

export const fetchBoardWeeksSuccessAction = (payload) => ({
  type: FETCH_BOARD_WEEKS_SUCCESS,
  payload,
});

export const fetchBoardWeeksErrorAction = (payload) => ({
  type: FETCH_BOARD_WEEKS_ERROR,
  payload,
});

export const fetchBoardPricesAction = (payload) => ({
  type: FETCH_BOARD_PRICES,
  payload,
});

export const fetchBoardPricesSuccessAction = (payload) => ({
  type: FETCH_BOARD_PRICES_SUCCESS,
  payload,
});

export const fetchBoardPricesErrorAction = (payload) => ({
  type: FETCH_BOARD_PRICES_ERROR,
  payload,
});
