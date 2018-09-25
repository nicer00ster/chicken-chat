import io from 'socket.io-client';
import * as types from '../constants';

const socket = io();
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
export function login(e, email, password) {
  e.preventDefault();
  console.log(email, password);
  return {
    type: types.LOGIN,
    email,
    password,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function register(e, email, password) {
  e.preventDefault();
  console.log(email, password);
  return {
    type: types.REGISTER,
    email,
    password,
  };
}

export function fetchUsers() {
  return {
    type: types.FETCH_USERS,
  };
}

// CHAT ACTIONS
export function sendMessage(message) {
  socket.emit('new message', message);
  return {
    type: types.SEND_MESSAGE,
    message,
  };
}
