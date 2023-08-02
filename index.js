const express = require('express');
const app = express();

const cookieParser =  require('cookie-parser');

require('dotenv').config();

const cors = require('cors');

const usersRoutes = require('./routes/Users');
const otpRoutes = require('./routes/Otp');
const restaurantRoutes = require('./routes/Restaurants');
const menuRoutes = require('./routes/Menu');
const driverRoutes = require('./routes/Driver');

app.use("*",cors({
    origin: true,
    methods:['POST','GET'],
    credentials:true
}));

app.use(cookieParser());

app.use(express.json());

app.use(usersRoutes);
app.use(otpRoutes);
app.use(restaurantRoutes);
app.use(menuRoutes);
app.use(driverRoutes);

// app.listen(process.env.MYSQL_ADDON_PORT);
app.listen(8000);