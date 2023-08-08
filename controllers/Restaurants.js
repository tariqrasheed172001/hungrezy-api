const {QueryGetRestaurants,addRestaurant,getRestaurant} = require('../service/Restaurants');

const GetRestaurants = (req,res) =>{
    QueryGetRestaurants(req,res);
}

const AddRestaurant = (req,res) =>{
    addRestaurant(req,res);
}

const GetRestaurant = (req,res) =>{
    getRestaurant(req,res);
}


module.exports = {GetRestaurants,AddRestaurant,GetRestaurant};

