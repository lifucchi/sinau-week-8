const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", authMiddleware.authenticate, userController.getProfile);
router.put("/profile", authMiddleware.authenticate, userController.updateProfile);

module.exports = router;
