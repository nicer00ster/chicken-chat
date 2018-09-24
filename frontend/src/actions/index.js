import * as types from '../constants';

// APP ACTIONS
export function screenResize(width) {
  return {
    type: types.SCREEN_RESIZE,
    width,
  };
}

export function handleInput(input, el) {
  console.log(input, el);
  return {
    type: types.INPUT,
    input,
    el,
  };
}

// AUTH ACTIONS
export function login(email, password) {
  return {
    type: types.LOGIN,
    email,
    password,
  };
}

export function register(data) {
  return {
    type: types.REGISTER,
    data,
  };
}
