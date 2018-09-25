import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import setupSocket from './sockets';
import rootReducer from './reducers';
import username from './utils/name';
import rootSaga from './sagas';
import Root from './Root';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(rootSaga, { socket, username });

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
