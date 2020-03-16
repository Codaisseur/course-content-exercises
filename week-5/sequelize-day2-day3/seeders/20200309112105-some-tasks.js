"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finish Reports",
          important: false,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 1
        },
        {
          task: "Plan Birthday",
          important: true,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 2
        },
        {
          task: "Go swimming",
          important: false,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 2
        },
        {
          task: "Practice freekicks",
          important: false,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 3
        },
        {
          task: "Score 60+ goals",
          important: true,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          todoListId: 3
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todoItems", null, {});
  }
};
