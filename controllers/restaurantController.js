const { Restaurant } = require("../models");

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
