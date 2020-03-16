"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define(
    "todoList",
    {
      name: DataTypes.STRING
    },
    {}
  );
  TodoList.associate = function(models) {
    TodoList.belongsTo(models.user);
    TodoList.hasMany(models.todoItem);
  };
  return TodoList;
};
