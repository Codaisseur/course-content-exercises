"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
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
    return queryInterface.bulkDelete("Users", null, {});
  }
};
