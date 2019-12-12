"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "TodoLists",
      "rand1",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "TodoLists",
      "rand2",
      { type: Sequelize.CUALCA },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TodoLists", "rand1", {});
    await queryInterface.removeColumn("TodoLists", "rand2", {});
  }
};
