exports.messagingHandler = socket => {
  socket.on('new-text-message', (data) => {
    console.log('RECEIVING MESSAGE')
    console.log(data)
  })
};


