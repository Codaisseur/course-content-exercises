"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      phone: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.todoList);
  };
  return User;
};
