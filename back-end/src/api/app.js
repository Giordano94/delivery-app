const express = require('express');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login');

module.exports = app;
