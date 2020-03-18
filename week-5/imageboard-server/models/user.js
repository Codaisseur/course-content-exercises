"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      fullName: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
