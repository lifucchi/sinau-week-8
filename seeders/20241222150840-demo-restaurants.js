"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Ocean View Dining",
        address: "Jl. Pantai Indah No. 10, Bali",
        capacity: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Skyline Rooftop",
        address: "Jl. Merdeka No. 21, Jakarta",
        capacity: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garden Bistro",
        address: "Jl. Mawar No. 5, Surabaya",
        capacity: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurants", null, {});
  },
};
