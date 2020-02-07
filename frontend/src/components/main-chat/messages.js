import React from 'react';
import Message from './message'

const Messages = () => {
  const messages = [
    {
      from: 'Lucian',
      text: 'Hello from lucian'
    },
    {
      from: 'Piscotel',
      text: 'Hello from piscotel'
    }
  ]

  return (
    <React.Fragment>
      <div className='messages'>
        { messages.map((el, index) => <Message key={`main-message_${index}`} {...el}></Message>)}
      </div>
    </React.Fragment>
  )
}

export default Messages
