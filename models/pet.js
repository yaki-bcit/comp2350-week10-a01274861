const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./web_user');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define('pet',
  {
    pet_id: {
      type: Sequelize.INTEGER, autoIncrement: true,
      primaryKey: true
    },
    web_user_id: { type: Sequelize.INTEGER, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    pet_type: { type: Sequelize.INTEGER, allowNull: false }
  },
  {
    tableName: 'pet',
    timestamps: false,
    singular: 'pet',
    plural: 'pet'
  }
);

petModel.belongsTo(userModel, {as: 'owner', timestamps: false, foreignKey: 'web_user_id'});
userModel.hasMany(petModel, {as: 'pets', timestamps: false, foreignKey: 'web_userid'});

module.exports = petModel;