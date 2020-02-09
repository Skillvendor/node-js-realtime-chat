import React from 'react';
import { useStore } from '../../state-management/stores/store'

const ChatInput = () => {
  const [state, setState] = React.useState({ message: '' })
  const globalStore = useStore()

  React.useEffect(() => {
    globalStore.socket.on('message-created', (data) => {
      console.log('message-created', data)
    })
  }, [])
  const handleTextChange = (value) => setState({ ...state, message: value })
  const sendMessage = () => {
    console.log(state, 'sending message')
    globalStore.socket.emit('new-text-message', {
      content: state.message
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
