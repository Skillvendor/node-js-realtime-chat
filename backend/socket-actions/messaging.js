const messageCreator = require('../forms/messages/create')

exports.messagingHandler = socket => {
  socket.on('new-text-message', (data) => {
    creator = new messageCreator(data)
    creator.call().then((message) => {
      socket.broadcast.emit('message-created', message)
    })
  })
};


