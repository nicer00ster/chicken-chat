import {
  takeEvery,
  put,
  call,
  take,
  all,
  fork,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as types from '../constants';
import rsf from '../../../config/rsf';
import db from '../../../config/db';

function* registerSaga(data) {
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, data.email, data.password);
    const ref = db.ref(`users/${user.user.uid}`);
    ref.once('value').then(snapshot => {
      if (snapshot.exists()) return;
      ref.set({
        email: data.email,
        uid: user.user.uid,
      });
    });
    yield put({ type: types.REGISTER_SUCCESS, user });
  } catch (error) {
    yield put({ type: types.REGISTER_FAILURE, error });
  }
}

function* loginSaga(data) {
  yield delay(2000);
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, data.email, data.password);
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error });
  }
}

function* logoutSaga() {
  yield delay(1500);
  try {
    yield call(rsf.auth.signOut);
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error });
  }
}

function* fetchUsersSaga() {
  yield delay(1750);
  try {
    const users = yield call(rsf.database.read, 'users');
    yield put({ type: types.FETCH_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: types.FETCH_USERS_FAILURE, error });
  }
}

function* fetchMessagesSaga(user) {
  console.log('saga', user);
  yield delay(1250);
  try {
    const users = yield call(rsf.database.read, 'users');
    const filtered = Object.values(users).filter(item => item.email === user.user);
    const messages = yield call(rsf.database.read, `users/${filtered[0].uid}/messages`);
    yield put({ type: types.FETCH_MESSAGES_SUCCESS, messages });
  } catch (error) {
    console.log(error);
    yield put({ type: types.FETCH_MESSAGES_FAILURE, error });
  }
}

function* sendMessageSaga(data) {
  yield delay(250);
  try {
    const uid = yield call(rsf.database.read, 'users');
    const filtered = Object.values(uid).filter(user => user.email === data.to);
    console.log(filtered);
    const message = yield call(rsf.database.create, `users/${data.user.uid}/messages/${filtered[0].uid}/`);
    const update = yield call(rsf.database.update, `users/${data.user.uid}/messages/${filtered[0].uid}/${message}`, {
      uid: message,
      message: data.message,
    });
    yield put({ type: types.SEND_MESSAGE_SUCCESS, update });
  } catch (error) {
    console.log(error);
    yield put({ type: types.SEND_MESSAGE_FAILURE, error });
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);
  while (true) {
    const { user } = yield take(channel);
    console.log(user);
    if (user) {
      const update = yield call(rsf.database.read, `users/${user.uid}`);
      yield put({ type: types.LOGIN_SUCCESS, user, update });
    } else yield put({ type: types.LOGIN_FAILURE });
  }
}

// export function* handleNewMessage(params) {
//   yield takeEvery(types.ADD_MESSAGE, action => {
//     action.author = params.username;
//     params.socket.send(JSON.stringify(action));
//   });
// }

function* rootSaga(params) {
  console.log(params);
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.REGISTER, registerSaga),
    takeEvery(types.LOGIN, loginSaga),
    takeEvery(types.LOGOUT, logoutSaga),
    takeEvery(types.FETCH_USERS, fetchUsersSaga),
    takeEvery(types.FETCH_MESSAGES, fetchMessagesSaga),
    takeEvery(types.SEND_MESSAGE, sendMessageSaga),
    takeEvery(types.ADD_MESSAGE, action => {
      action.sender = params.username;
      params.socket.send(JSON.stringify(action));
    }),
  ]);
}

export default rootSaga;
