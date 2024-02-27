const { Food } = require("../models/Food/Food");
const { FoodImages } = require("../models/Food/FoodImages");

const addFoodItem = async (req, res) => {
  const data = req.body;

  try {
    // Create a new food item
    const foodItem = await Food.create({
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      restaurant_id: data.restaurant_id,
    });

    // Insert image URLs into FoodImages table
    if (data.imageUrls && Array.isArray(data.imageUrls)) {
      const imagePromises = data.imageUrls.map(async (imageUrl) => {
        await FoodImages.create({
          food_id: foodItem.food_id,
          image_url: imageUrl,
        });
      });

      await Promise.all(imagePromises);
    }

    console.log({ message: "Food item added successfully!" });
    res.json({ message: "Food item added successfully!" });
  } catch (error) {
    console.error("Error adding food item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const fetchFoodByRestaurant = async (req, res) => {
  const { restaurant_id } = req.params;

  try {
    // Fetch all food items associated with the specified restaurant_id
    const foodItems = await Food.findAll({
      where: {
        restaurant_id: restaurant_id,
      },
      include: FoodImages, // Include FoodImages association to retrieve image URLs
    });

    res.json(foodItems);
  } catch (error) {
    console.error("Error fetching food items by restaurant:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const fetchAllFood = async (req, res) => {
  try {
    // Fetch all food items
    const foodItems = await Food.findAll({
      include: FoodImages, // Include FoodImages association to retrieve image URLs
    });

    res.json(foodItems);
  } catch (error) {
    console.error("Error fetching all food items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addFoodItem,
  fetchFoodByRestaurant,
  fetchAllFood,
};
