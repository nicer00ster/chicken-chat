import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  INPUT,
} from '../constants';

const initialState = {
  message: '',
  sending: false,
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        sending: true,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        sending: false,
        message: action.message,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error,
      };
    case INPUT:
      return {
        [action.el]: action.input,
      };
    default:
      return state;
  }
}
