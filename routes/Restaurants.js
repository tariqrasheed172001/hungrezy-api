const express = require('express');
const router = express.Router();

const {GetRestaurants,AddRestaurant,GetRestaurant} = require('../controllers/Restaurants');

require('dotenv').config();

router.get('/restaurants',GetRestaurants);

router.post('/add-restaurant',AddRestaurant);

router.post('/get-restaurant',GetRestaurant);


module.exports = router;