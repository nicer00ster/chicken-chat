import {
  SCREEN_RESIZE,
  CONNECTED,
  DISCONNECTED,
} from '../constants';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  connected: false,
  socketId: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.width,
      });
    case CONNECTED:
      return {
        ...state,
        connected: true,
        socketId: action.socketId,
      };
    case DISCONNECTED:
      return {
        ...state,
        connected: false,
        socket: null,
      };
    default:
      return state;
  }
}
