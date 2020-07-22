"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "itemTags",
      [
        {
          tagId: 1,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          todoItemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          todoItemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoItemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoItemId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          todoItemId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("itemTags", null, {});
  },
};
