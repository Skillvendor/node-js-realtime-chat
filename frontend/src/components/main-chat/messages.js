import React from 'react';
import Message from './message'
import { getMessagesRequest } from '../../requests/messages'
import { useStore, useDispatch } from '../../state-management/stores/store'

const Messages = () => {
  const { messagesStore } = useStore()
  const dispatch = useDispatch()

  React.useEffect(() => {
    const messagesPromise = getMessagesRequest()
    messagesPromise.then(messages => dispatch({
      type: 'GET_MESSAGES',
      messages,
    }))
  }, [])

  const messagesEndRef = React.useRef(null)
  const scrollToBottom = () => {
    if(messagesEndRef.current) {
      //messagesEndRef.scrollTop = messagesEndRef.scrollHeight;
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end"})

    }
  }
  scrollToBottom()

  const messages = (messagesStore.messages[messagesStore.currentChannel] || {}).values || []

  return (
    <React.Fragment>
      <div className='messages'>
        { messages.map((el, index) => <Message key={`main-message_${index}`} {...el}></Message>)}
        <div ref={messagesEndRef} />
      </div>
    </React.Fragment>
  )
}

export default Messages
