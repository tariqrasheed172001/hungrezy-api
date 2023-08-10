const {
  QueryGetRestaurants,
  addRestaurant,
  getRestaurant,
  addBankDetails,
  updateBankDetails,
  updateInformation,
  updateOwnerDetials,
  updateTimings,
} = require("../service/Restaurants");

const GetRestaurants = (req, res) => {
  QueryGetRestaurants(req, res);
};

const AddRestaurant = (req, res) => {
  addRestaurant(req, res);
};

const GetRestaurant = (req, res) => {
  getRestaurant(req, res);
};

const AddBankDetails = (req, res) => {
  addBankDetails(req, res);
};

const UpdateBankDetails = (req, res) => {
  updateBankDetails(req, res);
};

const UpdateInformation = (req, res) => {
  updateInformation(req, res);
};

const UpdateOwnerDetials = (req,res) => {
    updateOwnerDetials(req,res);
}

const UpdateTimings = (req,res) =>{
    updateTimings(req,res);
} 

module.exports = {
  GetRestaurants,
  AddRestaurant,
  GetRestaurant,
  AddBankDetails,
  UpdateBankDetails,
  UpdateInformation,
  UpdateOwnerDetials,
  UpdateTimings,
};
