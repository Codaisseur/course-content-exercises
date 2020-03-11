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
    // associations can be defined here
  };
  return TodoList;
};
