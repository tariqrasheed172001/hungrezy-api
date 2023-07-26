// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"foodDelivery",
// })

// con.connect(function(error){
//     if(error) throw error;

//     console.log('connected');
// });

// module.exports = con;

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('foodDelivery','root','',{
    host:'localhost',
    dialect:'mysql',
})

sequelize
    .authenticate()
    .then(()=>{
        console.log('Database connection has been established successfully');
    })
    .catch(err => {
        console.log('Unable to connect to the database',error)
    });

module.exports = sequelize;