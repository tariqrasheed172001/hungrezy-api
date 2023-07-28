

const {Sequelize} = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize('foodDelivery' ,'root','',{
//     host:'localHost',
//     dialect:'mysql',
})

const sequelize = new Sequelize(process.env.MYSQL_ADDON_DB ,process.env.MYSQL_ADDON_USER,process.env.MYSQL_ADDON_PASSWORD,{
    host:process.env.MYSQL_ADDON_HOST,
    dialect:'mysql',
})

sequelize
    .authenticate()
    .then(()=>{
        console.log('Database connection has been established successfully');
    })
    .catch((err) => {
        console.log('Unable to connect to the database',error)
    });

module.exports = sequelize;