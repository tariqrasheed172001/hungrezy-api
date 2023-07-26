const {DataTypes} = require('sequelize');
const sequelize = require('../connection');

const Driver = sequelize.define('drivers',{
    driver_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phone:{
        type:DataTypes.NUMBER,
        allowNull:false,
    },
    location:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:false,
    tableName:'drivers',
})

module.exports = {Driver};