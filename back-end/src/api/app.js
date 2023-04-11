const express = require('express');
const cors = require('cors');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');
const saleRoute = require('./routes/saleRoute');
const saleProductRoute = require('./routes/salesProduct');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productsRoute);
app.use('/user', userRoute);
app.use('/sale', saleRoute);
app.use('/saleProduct', saleProductRoute);

app.use('/images', express.static('public'));

module.exports = app;
