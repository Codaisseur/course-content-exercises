"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "todoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN
    },
    {}
  );
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.todoList);
    TodoItem.belongsToMany(models.tag, {
      through: "itemTags",
      foreignKey: "todoItemId"
    });
  };
  return TodoItem;
};
