const express = require('express');
const router = express.Router();

const {GetRestaurants,PostRestaurants} = require('../controllers/Restaurants');

require('dotenv').config();

router.get('/restaurants',GetRestaurants);

router.post('/restaurants',PostRestaurants);


module.exports = router;