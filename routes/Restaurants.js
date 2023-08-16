const express = require("express");
const router = express.Router();

const {
  GetRestaurants,
  AddRestaurant,
  GetRestaurant,
  AddBankDetails,
  UpdateBankDetails,
  UpdateInformation,
  UpdateOwnerDetials,
  UpdateTimings,
} = require("../controllers/Restaurants");

require("dotenv").config();

router.get("/restaurants", GetRestaurants);

router.post("/add-restaurant", AddRestaurant);

router.post("/get-restaurant", GetRestaurant);

router.post("/add-bank-details", AddBankDetails);

router.post("/update-bank-details", UpdateBankDetails);

router.post("/update-information", UpdateInformation);

router.post("/update-owner-details", UpdateOwnerDetials);

router.post("/update-timings", UpdateTimings);

module.exports = router;
