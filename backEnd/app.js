const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product.route'); // Imports routes for the products
const userRoutes = require('./routes/user.route');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});*/

app.use('/auth', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;