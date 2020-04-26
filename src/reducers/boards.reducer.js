import {
  FETCH_BOARD_LIST,
  FETCH_BOARD_LIST_SUCCESS,
  FETCH_BOARD_LIST_ERROR,
  FETCH_BOARD_DETAILS,
  FETCH_BOARD_DETAILS_SUCCESS,
  FETCH_BOARD_DETAILS_ERROR,
  FETCH_BOARD_WEEKS,
  FETCH_BOARD_WEEKS_SUCCESS,
  FETCH_BOARD_WEEKS_ERROR,
  FETCH_BOARD_PRICES,
  FETCH_BOARD_PRICES_SUCCESS,
  FETCH_BOARD_PRICES_ERROR,
} from "actions/boards.actions";

const initialState = {
  boardList: null,
  board: null,
};

export const boards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARD_LIST: {
      return {
        ...state,
        boardList: null,
        board: null,
      };
    }
    case FETCH_BOARD_LIST_SUCCESS: {
      return {
        ...state,
        boardList: action.payload,
      };
    }
    case FETCH_BOARD_LIST_ERROR: {
      return {
        ...state,
        boardList: {
          error: action.payload,
        },
      };
    }
    case FETCH_BOARD_DETAILS: {
      return {
        ...state,
        board: null,
      };
    }
    case FETCH_BOARD_DETAILS_SUCCESS: {
      return {
        ...state,
        board: action.payload,
      };
    }
    case FETCH_BOARD_DETAILS_ERROR: {
      return {
        ...state,
        board: {
          error: action.payload,
        },
      };
    }
    case FETCH_BOARD_WEEKS: {
      return {
        ...state,
        board: {
          ...state.board,
          weeks: null,
        },
      };
    }
    case FETCH_BOARD_WEEKS_SUCCESS: {
      return {
        ...state,
        board: {
          ...state.board,
          weeks: action.payload,
        },
      };
    }
    case FETCH_BOARD_WEEKS_ERROR: {
      return {
        ...state,
        board: {
          ...state.board,
          weeks: {
            error: action.payload,
          },
        },
      };
    }
    case FETCH_BOARD_PRICES: {
      return {
        ...state,
        board: {
          ...state.board,
          prices: null,
        },
      };
    }
    case FETCH_BOARD_PRICES_SUCCESS: {
      return {
        ...state,
        board: {
          ...state.board,
          prices: action.payload,
        },
      };
    }
    case FETCH_BOARD_PRICES_ERROR: {
      return {
        ...state,
        board: {
          ...state.board,
          prices: {
            error: action.payload,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
