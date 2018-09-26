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

// export function connectSocket(socketId) {
//   return {
//     type: types.CONNECTED,
//     socketId,
//   };
// }
//
//
// export function disconnectSocket() {
//   return {
//     type: types.DISCONNECTED,
//   };
// }

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
export function fetchMessages(user) {
  return {
    type: types.FETCH_MESSAGES,
    user,
  };
}

export function sendMessage(message, to, user) {
  return {
    type: types.SEND_MESSAGE,
    message,
    to,
    user,
  };
}

export function focusedUser(user) {
  return {
    type: types.FOCUSED_USER,
    user,
  };
}

let nextMessageId = 0;
let nextUserId = 0;

export function addMessage(message, sender) {
  return {
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    sender,
  };
}

export function addUser(name) {
  return {
    type: types.ADD_USER,
    id: nextUserId++,
    name,
  };
}

export function messageReceived(message, sender) {
  return {
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    sender,
  };
}

export function populateUsersList(users) {
  console.log(users);
  return {
    type: types.USERS_LIST,
    users,
  };
}
