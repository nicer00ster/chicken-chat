const express = require('express');
const path = require('path');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack.config');

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

const app = express();

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
