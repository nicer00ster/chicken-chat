const express = require('express');
const admin = require('firebase-admin');

const app = express();
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const WebSocket = require('ws');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const users = [];

const serviceAccount = require('../config/serviceAccountKey.json');

const wss = new WebSocket.Server({ port: 8989 });
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chicken-chat-1ae85.firebaseio.com/',
});

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', ws => {
  let index;
  ws.on('message', message => {
    const data = JSON.parse(message);
    console.log(data);
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length;
        users.push({ name: data.name, id: index + 1 });
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users,
        }));
        broadcast({
          type: 'USERS_LIST',
          users,
        }, ws);
        break;
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          sender: data.sender,
        }, ws);
        break;
      default:
        break;
    }
  });
  ws.on('close', () => {
    users.splice(index, 1);
    broadcast({
      type: 'USERS_LIST',
      users,
    }, ws);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (dev) {
  const compiler = webpack(webpackConfig);
  app.use(historyApiFallback({
    verbose: false,
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../frontend/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', err => {
  if (err) {
    console.error(err);
  }
  console.info('🐔🐤🐓🐣 Listening on http://0.0.0.0:%s/ in your browser. 🐔🐤🐓🐣', port);
});

module.exports = app;
