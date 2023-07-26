
const {Restaurants} = require('../models/Restaurants');

const QueryGetRestaurants = async (req,res) =>{

    try {
        const restaurants = await Restaurants.findAll();
        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching all restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const QueryPostRestaurants = async (req,res) =>{

    const data = req.body;

    try {
      // Create a new restaurant record in the database
      const newRestaurant = await Restaurants.create(data);
  
      // Send the newly created restaurant as a JSON response
      res.json(newRestaurant);
    } catch (error) {
      console.error('Error creating a new restaurant:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {QueryGetRestaurants,QueryPostRestaurants};