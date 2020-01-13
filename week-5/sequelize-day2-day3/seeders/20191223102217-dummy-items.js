"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "TodoItems",
      [
        {
          task: "Finish Reports",
          important: false,
          TodoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Plan Birthday",
          important: true,
          TodoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Go swimming",
          important: false,
          TodoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Practice freekicks",
          TodoListId: 3,
          important: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Score 60+ goals",
          TodoListId: 3,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("TodoItems", null, {});
  }
};
