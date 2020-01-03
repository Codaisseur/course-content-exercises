"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Images", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Images", "userId");
  }
};
