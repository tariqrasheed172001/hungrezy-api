const express = require('express');
const router = express.Router();

const {GetRestaurants,AddRestaurant} = require('../controllers/Restaurants');

require('dotenv').config();

router.get('/restaurants',GetRestaurants);

router.post('/add-restaurant',AddRestaurant);


module.exports = router;