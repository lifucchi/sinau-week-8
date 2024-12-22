const { Reservation, Restaurant } = require("../models");

exports.createReservation = async (req, res) => {
  const { restaurantId, reservationTime, numberOfPeople } = req.body;
  const userId = req.user.id;

  try {
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    const reservation = await Reservation.create({
      userId,
      restaurantId,
      reservationTime,
      numberOfPeople,
    });

    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findAll();
    res.json(Reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
