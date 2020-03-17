"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoItem = sequelize.define(
    "todoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN
    },
    {}
  );
  todoItem.associate = function(models) {
    // associations can be defined here
  };
  return todoItem;
};
