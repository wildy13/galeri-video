const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config');

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tblCategory',
  },
);

module.exports = Category;
