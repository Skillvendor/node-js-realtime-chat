const messageCreator = require('../forms/messages/create')

exports.messagingHandler = socket => {
  socket.on('new-text-message', (data) => {
    console.log('RECEIVING MESSAGE')
    console.log(data)
    creator = new messageCreator(data)
    creator.call().then((message) => {
      console.log('MESSAGE CREATED', 'now emiting')
      socket.emit('message-created', message)
    })
  })
};


