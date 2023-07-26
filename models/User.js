const {DataTypes} = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

const User = sequelize.define('User',{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    passwordd: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type:DataTypes.NUMBER,
        allowNull:false,
    }
},{
    timestamps:false
});

User.beforeCreate(async (user)=>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.passwordd,saltRounds);
        user.passwordd = hashedPassword;
    } catch (error) {
        throw new Error('error hashing password',error);
    }   
});


module.exports = {User};