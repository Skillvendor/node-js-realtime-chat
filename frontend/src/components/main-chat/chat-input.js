import React from 'react';
import { useStore, useDispatch } from '../../state-management/stores/store'

const ChatInput = () => {
  const [state, setState] = React.useState({ message: '' })
  const globalStore = useStore()
  const dispatch = useDispatch()

  React.useEffect(() => {
    globalStore.socket.on('message-created', (data) => {
      dispatch({
        type: 'NEW_MESSAGE',
        message: data
      })
    })
  }, [])
  const handleTextChange = (value) => setState({ ...state, message: value })
  const sendMessage = () => {
    if(state.message.trim().length === 0) {
      return
    }
    let currentChannel = globalStore.messagesStore.currentChannel
    if(currentChannel === 0) {
      currentChannel = null
    }

    globalStore.socket.emit('new-text-message', {
      content: state.message,
      channelId: currentChannel,
    })
    dispatch({
      type: 'NEW_MESSAGE',
      message: {
        content: state.message,
        channelId: currentChannel,
      }
    })
    setState({ ...state, message: '' })
  }

  return (
    <React.Fragment>
      <div className='messenger-input'>
        <div className='text-input'>
          <textarea
            placeholder='write your message here....'
            onChange={(event) => handleTextChange(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                sendMessage();
              }
            }}
            value={state.message}
          />
        </div>
        <div className='actions'>
          <button onClick={sendMessage} className='send'>Send</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatInput
