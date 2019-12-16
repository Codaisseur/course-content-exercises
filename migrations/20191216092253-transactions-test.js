"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.addColumn(
        "Users",
        "city",
        { type: Sequelize.STRING },
        { transaction: t }
      );
      await queryInterface.addColumn(
        "Users",
        "street",
        { type: Sequelize.ANYTHING },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.removeColumn("Users", "city", { transaction: t });
      await queryInterface.removeColumn("Users", "street", { transaction: t });
    });
  }
};
