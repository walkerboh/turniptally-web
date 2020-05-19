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
} from "actions/boardData.actions";
import {
  CREATE_BOARD,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_ERROR,
  CREATE_BOARD_RESET,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_ERROR,
  DELETE_BOARD_RESET,
  LEAVE_BOARD_SUCCESS,
  LEAVE_BOARD_ERROR,
  LEAVE_BOARD_RESET,
} from "actions/boardManagement.actions";

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
    case CREATE_BOARD: {
      return {
        ...state,
        create: {
          inProgress: true,
          success: false,
          error: null,
        },
      };
    }
    case CREATE_BOARD_SUCCESS: {
      return {
        ...state,
        create: {
          inProgress: false,
          success: true,
        },
      };
    }
    case CREATE_BOARD_ERROR: {
      return {
        ...state,
        create: {
          inProgress: false,
          error: action.payload,
        },
      };
    }
    case CREATE_BOARD_RESET: {
      return {
        ...state,
        create: null,
      };
    }
    case DELETE_BOARD_SUCCESS: {
      return {
        ...state,
        delete: {
          success: true,
        },
      };
    }
    case DELETE_BOARD_ERROR: {
      return {
        ...state,
        delete: {
          success: false,
          error: action.payload,
        },
      };
    }
    case DELETE_BOARD_RESET: {
      return {
        ...state,
        delete: null,
      };
    }
    case LEAVE_BOARD_SUCCESS: {
      return {
        ...state,
        leave: {
          success: true,
        },
      };
    }
    case LEAVE_BOARD_ERROR: {
      return {
        ...state,
        leave: {
          success: false,
          error: action.payload,
        },
      };
    }
    case LEAVE_BOARD_RESET: {
      return {
        ...state,
        leave: null,
      };
    }
    default: {
      return state;
    }
  }
};
