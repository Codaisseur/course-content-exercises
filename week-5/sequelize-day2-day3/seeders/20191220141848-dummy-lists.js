"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Matias Work List",
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Matias Personal List",
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo's futbol list",
          UserId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("TodoLists", null, {});
  }
};
