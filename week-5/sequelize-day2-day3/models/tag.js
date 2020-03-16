"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      title: DataTypes.STRING
    },
    {}
  );
  tag.associate = function(models) {
    tag.belongsToMany(models.todoItem, {
      through: "itemTags",
      foreignKey: "tagId"
    });
  };
  return tag;
};
