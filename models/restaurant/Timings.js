const { DataTypes } = require("sequelize");
const sequelize = require("../../connection");
const {Restaurants} = require('./Restaurants');
const Timings = sequelize.define(
  "Timings",
  {
    timing_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    opening_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closing_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    // working_days: {
    //   type: DataTypes.STRING, // You can also use DataTypes.ARRAY(DataTypes.STRING) if you want to store multiple days as an array.
    //   allowNull: false,
    // },
    working_days: {
      type: DataTypes.STRING, // Using ARRAY data type for working days
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Set up the association: Menu belongs to a Restaurant
Timings.belongsTo(Restaurants, {
  foreignKey: "restaurant_id", // Specify the foreign key column name
  onDelete: 'CASCADE',
});

module.exports = { Timings };
