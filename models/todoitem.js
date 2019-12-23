"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "TodoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN
    },
    {}
  );
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.TodoList);
  };
  return TodoItem;
};
