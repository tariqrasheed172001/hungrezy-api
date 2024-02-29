
const {addFoodItem,fetchFoodByRestaurant,fetchAllFood} = require('../service/Food');

const AddFoodItem = (req,res) => {
    addFoodItem(req,res);
}

const FetchFoodByRestaurant = (req,res) => {
    fetchFoodByRestaurant(req,res);
}

const FetchAllFood = (req,res) => {
    fetchAllFood(req,res);
}

module.exports = {AddFoodItem,FetchFoodByRestaurant,FetchAllFood};