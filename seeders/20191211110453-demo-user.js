"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Matias",
          lastName: "Garcia",
          email: "matias@codaisseur.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Leo",
          lastName: "Messi",
          email: "leo@bcn.com",
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
