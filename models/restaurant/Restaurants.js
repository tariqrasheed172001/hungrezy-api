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

const {User} = require('../User');

// Set up the association: Menu belongs to a Restaurant
Restaurants.belongsTo(User, {
  foreignKey: "user_id", // Specify the foreign key column name
  onDelete: 'CASCADE',
});

module.exports = { Restaurants };
