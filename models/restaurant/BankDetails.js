const { DataTypes } = require("sequelize");
const sequelize = require("../../connection");
const { Restaurants } = require("./Restaurants");

const BankDetails = sequelize.define(
  "BankDetails",
  {
    bank_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bank_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Set up the association: BankDetails belongs to a Restaurant
BankDetails.belongsTo(Restaurants, {
  foreignKey: "restaurant_id", // Specify the foreign key column name
  onDelete: "CASCADE",
});

// Synchronize the model with the database schema
BankDetails.sync()
  .then(() => {
    console.log("BankDetails model synced");
  })
  .catch((error) => {
    console.error("Error syncing BankDetails model:", error);
  });

module.exports = { BankDetails };
