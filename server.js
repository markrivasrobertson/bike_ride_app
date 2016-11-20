const path = require('path');
const app = require('./app/app.js');
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const webpackMiddle = webpackDevMiddleware(compiler, {
  publicPath: '/js',
  stats: {
    chunks: false,
    colors: true,
  },
});

app.use(webpackMiddle);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
