'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {});
  Member.associate = function(models) {
    Member.belongsTo(models.Channel);
    Member.belongsTo(models.User);
  };
  return Member;
};
