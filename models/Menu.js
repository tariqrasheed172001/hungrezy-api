const {DataTypes} = require('sequelize');
const sequelize = require('../connection');

const {Restaurants} = require('./restaurant/Restaurants')

const Menu = sequelize.define('Menu',{
    menu_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    item_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    }
},{
    timestamps:false,
    tableName:'menu',
});

// Set up the association: Menu belongs to a Restaurant
Menu.belongsTo(Restaurants, {
    foreignKey: 'restaurant_id', // Specify the foreign key column name
    onDelete: 'CASCADE', // Optional: Define the behavior on delete (e.g., CASCADE, SET NULL, etc.)
  });

module.exports = {Menu};