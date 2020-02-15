import React from 'react';

const Message = (props) => {
  const createMessageMarkup = (value) => {
    return {
      __html: value
    }
  }
  const displayMessage = (value) => {
    const messages = props.content.split('\n')
    return messages.map((el,index) => <div key={`message_${props.id}_${index}`} dangerouslySetInnerHTML={createMessageMarkup(el)} /> )
  }
  return (
    <React.Fragment>
      <div className='message'>
        <div className='message-user-image'>
          <img src='http://www.gravatar.com/avatar' />
        </div>

        <div className='message-body'>
          <div className='message-author'> {(props.User || {}).name} says: </div>
          <div className='message-text'>
            {displayMessage(props.content)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Message
