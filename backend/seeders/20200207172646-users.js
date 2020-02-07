'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Lucian',
      password: bcrypt.hashSync('123456', 5),
    },
    {
      name: 'Piscotel',
      password: bcrypt.hashSync('123456', 5),
    }], {}).then(() => {
      return queryInterface.bulkInsert('Channels', [{
        name: 'jocuri',
      },
      {
        name: 'gigel',
      }], {}).then(() => {
      return queryInterface.bulkInsert('Messages', [{
        content: 'Salutari!',
        userId: 1,
        channelId: null,
      },
      {
        content: 'Buna ..!',
        userId: 2,
        channelId: null,
      },
      {
        content: 'Ce faci Lucian?',
        userId: 2,
        channelId: null,
      },
      {
        content: 'Uite bine, tie cum iti merge? :D',
        userId: 1,
        channelId: null,
      },
      {
        content: 'Buna ..!',
        userId: 2,
        channelId: 1,
      },
      {
        content: 'Hey!',
        userId: 1,
        channelId: 1,
      }], {}).then(() => {
      return queryInterface.bulkInsert('Members', [{
        userId: 1,
        channelId: 1,
      },
      {
        userId: 2,
        channelId: 1
      }], {})})})});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {}).then(() => {
      return queryInterface.bulkDelete('Members', null, {}).then(() => {
        return queryInterface.bulkDelete('Channels', null, {}).then(() => {
          return queryInterface.bulkDelete('Users', null, {});
        })
      })
    })
  }
};
