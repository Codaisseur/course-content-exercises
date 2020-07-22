"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finish Reports",
          important: true,
          deadline: "20/3/2020",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan Birthday",
          important: true,
          deadline: "20/3/2020",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go swimming",
          important: false,
          deadline: "20/3/2020",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Practice freekicks",
          important: false,
          deadline: "20/3/2020",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Score 60+ goals",
          important: false,
          deadline: "20/3/2020",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
