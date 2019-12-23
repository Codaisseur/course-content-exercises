"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.TodoList);
  };
  return User;
};
