"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          email: "matias@codaisseur.com",
          phone: 12345678,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo",
          email: "leo@bcn.com",
          phone: 12345678,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
