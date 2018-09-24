import {
  SCREEN_RESIZE,
} from '../constants';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.width,
      });
    default:
      return state;
  }
}
