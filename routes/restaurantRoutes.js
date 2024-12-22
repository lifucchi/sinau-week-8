const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware.authenticate, restaurantController.getRestaurants);

module.exports = router;
