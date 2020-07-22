const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const productRoutes = require('./productsAPI/routes/product.route'); // Imports routes for the products
const userRoutes = require('./usersAPI/routes/user.route');

const mongoose = require('./library/bdd');
const headerSetter = require('./middleware/header.mid');
const logger = require('./middleware/log.mid');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(headerSetter);
app.use(logger);

app.use('/auth', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;