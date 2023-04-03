const express = require('express');
const cors = require('cors');
const loginRoute = require('./routes/loginRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute);

module.exports = app;
