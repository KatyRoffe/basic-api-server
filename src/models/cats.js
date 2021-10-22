'use strict';

const Cat = (sequelize, DataTypes) => sequelize.define('Cat', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});


module.exports = Cat;