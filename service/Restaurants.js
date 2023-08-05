const { Restaurants } = require("../models/restaurant/Restaurants");
const { Owners } = require('../models/restaurant/Owners');
const { Timings } = require('../models/restaurant/Timings');

const QueryGetRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.findAll();
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching all restaurants:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addRestaurant = async (req, res) => {
  const data = req.body;

  try {
        // Create a new restaurant
        console.log(data.restaurant.user_id);
        const restaurant = await Restaurants.create({
          name: data.restaurant.name,
          address: data.restaurant.address,
          phone_number: data.restaurant.phone,
          user_id: data.restaurant.user_id,
        });

        console.log(restaurant.restaurant_id);
    
        // Create an owner for the restaurant
        const owner = await Owners.create({
          name: data.owner.name,
          email: data.owner.email,
          phone_number: data.owner.phone,
          restaurant_id: restaurant.restaurant_id, // Assign the foreign key (RestaurantId) to link the owner to the restaurant
        });
    
        // Create timings for the restaurant
        const timings = await Timings.create({
          opening_time: data.timings.opens_at,
          closing_time: data.timings.closes_at,
          working_days: data.timings.working_days, // Storing working days as a comma-separated string
          restaurant_id: restaurant.restaurant_id, // Assign the foreign key (RestaurantId) to link the timings to the restaurant
        });

        console.log({message:'Restaurant data stored successfully!'});
        res.json({message:"Restaurant successfully added!"});
  } catch (error) {
    console.error('Error storing restaurant data:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { QueryGetRestaurants, addRestaurant };
