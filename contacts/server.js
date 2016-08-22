'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const myJson = require('./queries');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.static('/'));
app.use(express.static('/client/css'));
app.use(express.static('/client/js'));
app.use(cors());

app.get('/', (req, res) => {
  myJson.getNames(req, row => {
    res.send(row);
  });
});

app.post('/', (req, res) => {
  myJson.updateName(req, row => {
    res.send(row);
  });
});

app.listen(3000);
