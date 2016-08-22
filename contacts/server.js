'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const myJson = require('./queries');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.static('/'));
app.use(express.static('/img'));
app.use(cors());

app.get('/', cors(), (req, res) => {
  myJson.getNames(req, row => {
    res.send(row);
  });
});

app.post('/', cors(), (req, res) => {
  myJson.updateName(req, row => {
    res.send(row);
  });
});

app.listen(3001);
