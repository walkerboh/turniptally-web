import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
  FETCH_TIMEZONES_SUCCESS,
  FETCH_USER_WEEK_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_PASSWORD_RESET_STATUS,
  FETCH_PASSWORD_RESET_STATUS_SUCCESS,
  FETCH_PASSWORD_RESET_STATUS_ERROR,
  SEND_PASSWORD_RESET,
  SEND_PASSWORD_RESET_ERROR,
  SEND_PASSWORD_RESET_SUCCESS,
} from "actions/users.actions";

const user = { ...JSON.parse(localStorage.getItem("user")), loggedIn: true };

const initialState = {
  user: user ?? {},
  timezones: [],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload, loggedIn: true },
      };
    }
    case LOGIN_ERROR:
      return {
        ...state,
        user: {
          invalidLogin: true,
        },
      };
    case REGISTER: {
      return {
        ...state,
        user: {},
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: {
          registerSuccess: true,
        },
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        user: {
          registerSuccess: false,
          registrationError: action.payload.response,
        },
      };
    }
    case FETCH_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          details: action.payload,
        },
      };
    }
    case FETCH_USER_WEEK_DETAILS_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          week: action.payload,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
      };
    }
    case FETCH_TIMEZONES_SUCCESS: {
      return {
        ...state,
        timezones: action.payload,
      };
    }
    case FETCH_PASSWORD_RESET_STATUS: {
      return {
        ...state,
        reset: {
          verify: { loading: true },
        },
      };
    }
    case FETCH_PASSWORD_RESET_STATUS_SUCCESS: {
      return {
        ...state,
        reset: {
          verify: {
            loading: false,
            valid: true,
          },
        },
      };
    }
    case FETCH_PASSWORD_RESET_STATUS_ERROR: {
      return {
        ...state,
        reset: {
          verify: {
            loading: false,
            valid: false,
          },
        },
      };
    }
    case SEND_PASSWORD_RESET: {
      return {
        ...state,
        reset: {
          ...state.reset,
          submit: {
            loading: true,
          },
        },
      };
    }
    case SEND_PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        reset: {
          ...state.reset,
          submit: {
            loading: false,
            success: true,
          },
        },
      };
    }
    case SEND_PASSWORD_RESET_ERROR: {
      return {
        ...state,
        reset: {
          ...state.reset,
          submit: {
            loading: false,
            success: false,
            error: action.payload,
          },
        },
      };
    }
    default:
      return state;
  }
};
