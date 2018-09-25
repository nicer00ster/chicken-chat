import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INPUT,
  ADD_USER,
  USERS_LIST,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants';

const initialState = {
  username: '',
  email: '',
  password: '',
  uid: '',
  authenticated: false,
  fetching: false,
  users: [],
  error: null,
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
        email: action.update.email,
        uid: action.user.uid,
        authenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authenticated: false,
        error: action.error,
      };
    case FETCH_USERS:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: action.users,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat([
          {
            name: action.name,
            id: action.id,
          },
        ]),
      };
    case USERS_LIST:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
}
