const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');
const {Food} = require('./Food');

const FoodImages = sequelize.define('Images', {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});

// Set up the association: Images belong to a Food item
FoodImages.belongsTo(Food, {
    foreignKey: 'food_id',
    onDelete: 'CASCADE',
});

Food.hasMany(FoodImages, { foreignKey: 'food_id' });

// Synchronize the model with the database schema
FoodImages.sync()
  .then(() => {
    console.log("Images model synced");
  })
  .catch((error) => {
    console.error("Error syncing Images model:", error);
  });

module.exports = { FoodImages };
