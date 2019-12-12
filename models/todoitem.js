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
    // associations can be defined here
  };
  return TodoItem;
};
