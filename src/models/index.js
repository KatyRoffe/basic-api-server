'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CatModel = require('./cats.js');
const BookModel = require('./books.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';


const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const catTable = CatModel(sequelizeInstance, DataTypes);
const bookTable = BookModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  cats: catTable,
  books: bookTable,
};