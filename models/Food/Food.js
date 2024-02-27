const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');

const { Restaurants } = require('../restaurant/Restaurants');

const Food = sequelize.define('Food', {
    food_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Add the restaurant_id field to associate food items with restaurants
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false
});

// Set up the association: Food belongs to a Restaurant
Food.belongsTo(Restaurants, {
    foreignKey: 'restaurant_id', // Specify the foreign key column name
    onDelete: 'CASCADE', // Optional: Define the behavior on delete (e.g., CASCADE, SET NULL, etc.)
});


// Synchronize the model with the database schema
Food.sync()
  .then(() => {
    console.log("Food model synced");
  })
  .catch((error) => {
    console.error("Error syncing Food model:", error);
  });

module.exports = { Food };
