"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const helloSomebody = require('./routes/helloSomebody');

const app = express();

app.use(bodyParser.json());

app.use(helloSomebody);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'Fail',
        message: `Can't find path '${req.originalUrl}' on this server. Use the schema as a guide.`,
        schema: 'localhost:8080/[valid route]/[param|required]',
        example: 'localhost:8080/hello/world'
    });
});

module.exports = app;