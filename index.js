const express = require("express");
const app = express();
const myParser = require('body-parser')
const cookieParser = require("cookie-parser");

require("dotenv").config();

const cors = require("cors");

const usersRoutes = require("./routes/Users");
const otpRoutes = require("./routes/Otp");
const restaurantRoutes = require("./routes/Restaurants");
const menuRoutes = require("./routes/Menu");
const driverRoutes = require("./routes/Driver");
const foodRoutes = require("./routes/Food");

app.use(
  "*",
  cors({
    origin: true,
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(myParser.json({limit: '200mb'}));
app.use(myParser.urlencoded({limit: '200mb', extended: true}));
app.use(myParser.text({ limit: '200mb' }));

app.use(usersRoutes);
app.use(otpRoutes);
app.use(restaurantRoutes);
app.use(menuRoutes);
app.use(driverRoutes);
app.use(foodRoutes);

app.listen(process.env.MYSQL_ADDON_PORT);
