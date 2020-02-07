'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {});
  Members.associate = function(models) {
    // associations can be defined here
  };
  return Members;
};