import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
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

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: teal,
  },
  status: {
    danger: 'orange',
  },
});

sagaMiddleware.run(rootSaga, { socket, username });

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </MuiThemeProvider>
  );
}
