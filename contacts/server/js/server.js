'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const myJson = require('./queries');

const app = express();
app.use(bodyParser.json());
app.use(express.static('../../'));
app.use(express.static('../../client/css'));

app.get('/names/', (req, res) => {
  myJson.getNames(req, row => {
    res.send(row);
  });
});

app.post('/names/', (req, res) => {
  myJson.updateName(req, row => {
    res.send(row);
  });
});

app.listen(3000);
