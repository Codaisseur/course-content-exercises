"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Matias",
          email: "matias@codaisseur.com",
          phone: 12345678,
          city: "Montevideo",
          street: "Lieja",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo",
          email: "leo@bcn.com",
          phone: 12345678,
          city: "Barcelona",
          street: "Las ramblas",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
