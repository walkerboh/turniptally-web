import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "src/actions/user.actions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ?? {},
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGIN_ERROR:
      return {
        ...state,
        user: {
          invalidLogin: true,
        },
      };
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
          registrationError: action.payload.message,
        },
      };
    }
    default:
      return state;
  }
};
