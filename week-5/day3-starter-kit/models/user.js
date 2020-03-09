"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      phone: DataTypes.INTEGER
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
