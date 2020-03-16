"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Matias Work List",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Matias Personal List",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo's futbol list",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todoLists", null, {});
  }
};
