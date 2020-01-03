"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {}
  );
  Image.associate = function(models) {
    Image.belongsTo(models.User);
  };
  return Image;
};
