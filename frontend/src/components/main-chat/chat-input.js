import React, { useReducer } from 'react';
import { useStore } from '../../state-management/stores/store'

const ChatInput = (props) => {
  const [state, setState] = React.useState({ message: '' })
  const globalStore = useStore()

  const handleTextChange = (value) => setState({ ...state, message: value })
  const sendMessage = () => {
    console.log(state, 'sending message')
    globalStore.socket.emit('new-text-message', {
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
