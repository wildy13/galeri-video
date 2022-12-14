const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config');
const Category = require('../category/model');
const User = require('../user/model');

const Galery = sequelize.define(
  'galery',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    tableName: 'tblGalery',
  },
);

module.exports = Galery;
