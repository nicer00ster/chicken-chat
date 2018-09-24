import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INPUT,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants';

const initialState = {
  username: '',
  email: '',
  password: '',
  authenticated: false,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INPUT: {
      return {
        ...state,
        [action.el]: action.input,
      };
    }
    case LOGIN:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
