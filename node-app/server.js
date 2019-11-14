'use strict';

console.log(process.env);

const express = require('express');

var prometheus = require('appmetrics-prometheus').attach();

require('dotenv').config()
console.log(`Your port is ${process.env.PORT}`);
console.log(`NODE_ENV is ${process.env.NODE_ENV}`);

// Constants
const PORT = '8080';
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/error*', (req, res) => {
  res.send('You got error in your logs\n');
  console.log(req.url);
});

app.get('/*', (req, res) => {
  res.send("Hello there. You are runnig test nodejs app server on ${process.env.PORT} port in ${process.env.NODE_ENV}");
});



app.listen(PORT, HOST);
console.log(`Version: 0.1 - Running on http://${HOST}:${PORT}`);
