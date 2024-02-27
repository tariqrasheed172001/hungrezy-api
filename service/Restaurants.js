const { Restaurants } = require("../models/restaurant/Restaurants");
const { Owners } = require("../models/restaurant/Owners");
const { Timings } = require("../models/restaurant/Timings");
const { BankDetails } = require("../models/restaurant/BankDetails");

const updateTimings = async (req, res) => {
  const data = req.body;
  try {
    await Timings.upsert({
      timing_id: data?.timing_id,
      opening_time: data?.opening_time,
      closing_time: data?.closing_time,
      working_days: data?.working_days,
      restaurant_id: data?.restaurant_id,
    });
    res.json("Timings saved");
  } catch (error) {
    console.error("error while saving Timings", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOwnerDetials = async (req, res) => {
  const data = req.body;
  try {
    await Owners.upsert({
      owner_id: data?.owner_id,
      name: data?.name,
      email: data?.email,
      phone_number: data?.phone_number,
      restaurant_id: data?.restaurant_id,
    });
    res.json("Onwer details saved");
  } catch (error) {
    console.error("error while saving Owner details", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateInformation = async (req, res) => {
  const data = req.body;
  try {
    await Restaurants.upsert({
      restaurant_id: data?.restaurant_id,
      name: data?.name,
      address: data?.address,
      phone_number: data?.phone_number,
      user_id: data?.user_id,
    });
    res.json("Restaurant details saved");
  } catch (error) {
    console.error("error while saving restaurant details", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateBankDetails = async (req, res) => {
  const data = req.body;
  try {
    await BankDetails.upsert({
      bank_id: data?.bank_id,
      account_number: data?.account_number,
      bank_name: data?.bank_name,
      bank_code: data?.bank_code,
      restaurant_id: data?.restaurant_id,
    });
    res.json("Bank details saved");
  } catch (error) {
    console.error("error while saving bank details", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getRestaurant = async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  try {
    const restaurant = await Restaurants.findOne({ where: { user_id } });
    if (restaurant === null) {
      res.status(202).json("user has no restaurant");
    } else {
      const { restaurant_id } = restaurant;
      const owner = await Owners.findOne({ where: { restaurant_id } });
      const timings = await Timings.findOne({ where: { restaurant_id } });
      const bank_details = await BankDetails.findOne({
        where: { restaurant_id },
      });

      res.json({ restaurant, owner, timings, bank_details });
    }
  } catch (error) {
    console.error("error fetching a restaurant", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const QueryGetRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.findAll();
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching all restaurants:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addBankDetails = (req, res) => {
  const data = req.body;

  try {
    const bankDetails = BankDetails.create({
      account_number: data.account_number,
      bank_name: data.bank_name,
      bank_code: data.bank_code,
      restaurant_id: data.restaurant_id,
    });

    console.log({ message: "Bank details added successfully!" });
    res.json({ message: "Bank details added successfully!" });
  } catch (error) {
    console.error("Error storing bank details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addRestaurant = async (req, res) => {
  const data = req.body;

  try {
    // Create a new restaurant
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

    console.log({ message: "Restaurant data stored successfully!" });
    res.json({ message: "Restaurant successfully added!" });
  } catch (error) {
    console.error("Error storing restaurant data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  QueryGetRestaurants,
  addRestaurant,
  getRestaurant,
  addBankDetails,
  updateBankDetails,
  updateInformation,
  updateOwnerDetials,
  updateTimings,
};
