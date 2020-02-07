'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};