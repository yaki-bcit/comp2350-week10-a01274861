const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petTypeModel = sequelize.define('pet',
  {
    pet_type_id: {
      type: Sequelize.INTEGER, autoIncrement: true,
      primaryKey: true
    },
    pet_type: { type: Sequelize.INTEGER, allowNull: false }
  },
  {
    tableName: 'pet_type',
    timestamps: false,
    singular: 'pet_type',
    plural: 'pet_type'
  }
);

module.exports = petTypeModel;