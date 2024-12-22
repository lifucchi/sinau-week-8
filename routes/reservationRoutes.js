const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware.authenticate, reservationController.createReservation);
router.get("/", authMiddleware.authenticate, reservationController.getReservation);

module.exports = router;
