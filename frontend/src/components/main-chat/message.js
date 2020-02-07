import React from 'react';

const Message = (props) => {
  return (
    <React.Fragment>
      <div className='message'>
        <div className='message-user-image'>
          <img src='http://www.gravatar.com/avatar' />
        </div>

        <div className='message-body'>
          <div className='message-author'> {props.from} says: </div>
          <div className='message-text'>
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Message
