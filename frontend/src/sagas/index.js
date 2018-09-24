import {
  takeEvery,
  put,
  call,
  take,
  all,
  fork,
} from 'redux-saga/effects';
import * as types from '../constants';
import { delay } from 'redux-saga';
import rsf from '../../../config/rsf';
import db from '../../../config/db';

function* registerSaga(email, password) {
  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
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

// This is your root saga.
function* rootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.REGISTER, registerSaga),
    takeEvery(types.LOGIN, loginSaga),
  ]);
}

export default rootSaga;
