'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    lastMessageContent: DataTypes.STRING,
  }, {});
  Channel.associate = function(models) {
    Channel.hasMany(models.Member)
    Channel.hasMany(models.Message)
  };
  return Channel;
};
