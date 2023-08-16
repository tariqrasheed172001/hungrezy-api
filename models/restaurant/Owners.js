const { DataTypes } = require("sequelize");
const sequelize = require("../../connection");
const {Restaurants} = require('./Restaurants');


const Owners = sequelize.define(
  "Owners",
  {
    owner_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type:DataTypes.NUMBER,
      allowNull:false,
    },
  },
  {
    timestamps: false,
  }
);

// Set up the association: Menu belongs to a Restaurant
Owners.belongsTo(Restaurants, {
  foreignKey: "restaurant_id", // Specify the foreign key column name
  onDelete: 'CASCADE',
});


module.exports = { Owners };
