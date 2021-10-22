'use strict';

const Book = (sequelize, DataTypes) => sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});


module.exports = Book;