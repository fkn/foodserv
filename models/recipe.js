'use strict';
module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          
        }
      }
    });
  return Recipe;
};