'use strict';

console.log(process.env);

const express = require('express');

var prometheus = require('appmetrics-prometheus').attach();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/error*', (req, res) => {
  res.send('You got error in your logs\n');
  console.log(req.url);
});

app.get('/*', (req, res) => {
  res.send('Hello world\n');
});



app.listen(PORT, HOST);
console.log(`Version: 0.1 - Running on http://${HOST}:${PORT}`);
