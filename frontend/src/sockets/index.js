import * as types from '../constants';
import { addUser, messageReceived, populateUsersList } from '../actions';
import { app } from '../../../config/base';

console.log(app.auth().currentUser);

const setupSocket = async dispatch => {
  const socket = new WebSocket('ws://10.0.40.58:8989');

  const username = app.auth().currentUser.email;
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username,
    }));
  };
  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.sender));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
