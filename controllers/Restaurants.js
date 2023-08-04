const {QueryGetRestaurants,addRestaurant} = require('../service/Restaurants');

const GetRestaurants = (req,res) =>{
    QueryGetRestaurants(req,res);
}

const AddRestaurant = (req,res) =>{
    addRestaurant(req,res);
}


module.exports = {GetRestaurants,AddRestaurant};

