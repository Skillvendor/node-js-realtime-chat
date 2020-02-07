const socket = require('socket.io')
const messages = require('./socket-actions/messaging')
let io;

module.exports = {
  init: httpServer => {
    io = socket(httpServer);
    io.sockets.on('connection', (socket) => {
      console.log('CONNECTED FINALLY')
      messages.messagingHandler(socket);
  });
    return io;
  },
  getIO: () => io
};
