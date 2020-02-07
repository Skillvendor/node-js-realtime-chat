import React from 'react';
import openSocket from 'socket.io-client'

const ChatInput = (props) => {
  const endpoint = 'http://localhost:5004'
  const [state, setState] = React.useState({ message: '' })
  const [socketStore, setSocketStore] = React.useState({ socket: openSocket(endpoint) })

  const handleTextChange = (value) => setState({ ...state, message: value })
  const sendMessage = () => {
    console.log(state, 'sending message')
    socketStore.socket.emit('new-text-message', {
      message: state.message
    })
  }

  return (
    <React.Fragment>
      <div className='messenger-input'>
        <div className='text-input'>
          <textarea
            placeholder='write your message here....'
            onChange={(event) => handleTextChange(event.target.value)}
            value={state.message}
          />
        </div>
        <div className='actions'>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatInput
