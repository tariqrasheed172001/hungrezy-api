const { DataTypes } = require("sequelize");
const sequelize = require("../../connection");

const Restaurants = sequelize.define(
  "Restaurants",
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type:DataTypes.NUMBER,
      allowNull:false,
    },
  },
  {
    timestamps: false,
    tableName:'restaurants',
  }
);

module.exports = { Restaurants };
