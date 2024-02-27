const express = require('express');
const router = express.Router();

const {AddFoodItem,FetchFoodByRestaurant,FetchAllFood} = require('../controllers/Food');

router.post('/food/add',AddFoodItem);
router.get('/food/fetch/restaurant-wise/:restaurant_id',FetchFoodByRestaurant);
router.get('/food/fetch/all',FetchAllFood)

module.exports = router;