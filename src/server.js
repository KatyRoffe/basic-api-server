'use strict';

const express = require('express');
const catsRoutes = require('./routes/cats.js');
const booksRoutes = require('./routes/books.js');

const app = express();

app.use(express.json());


app.use(catsRoutes);
app.use(booksRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}