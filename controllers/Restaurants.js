const {QueryGetRestaurants,QueryPostRestaurants} = require('../service/Restaurants');

const GetRestaurants = (req,res) =>{
    QueryGetRestaurants(req,res);
}

const PostRestaurants = (req,res) =>{
    QueryPostRestaurants(req,res);
}


module.exports = {GetRestaurants,PostRestaurants};

