import React from 'react';

const ChatInput = (props) => {
  return (
    <React.Fragment>
      <div className='messenger-input'>
        <div className='text-input'>
          <textarea placeholder='write your message here....'></textarea>
        </div>
        <div className='actions'>
          <button>Send</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatInput
