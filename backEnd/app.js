const express = require('express');

const app = express();
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.render("index.html");
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;