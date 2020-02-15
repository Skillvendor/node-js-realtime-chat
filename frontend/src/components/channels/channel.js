import React from 'react';
import { useStore, useDispatch } from '../../state-management/stores/store'
import { getMessagesRequest } from '../../requests/messages'
import classNames from 'classnames/bind';

const Channel = (props) => {
  console.log('IN CHANNEL', props)
  const { messagesStore } = useStore()
  const dispatch = useDispatch()

  const handleChannelSelect = () => {
    dispatch({
      type: 'CHANNEL_SELECT',
      channel: {
        id: props.id,
        name: props.name,
      }
    })
    if(!(messagesStore.messages[props.id] || {}).requested) {
      const messagesPromise = getMessagesRequest({ channelId: props.id })
      messagesPromise.then(messages => dispatch({
        type: 'GET_MESSAGES',
        messages,
      }))
    }
  }

  return (
    <React.Fragment>
      <div className={
        classNames(
          'channel',
          {
            'active': messagesStore.currentChannel === props.id
          }
        )}
        onClick={handleChannelSelect}
      >
        <div className='user-image'><img src='http://www.gravatar.com/avatar' /></div>
        <div className='channel-info'>
          <h2> {props.name}</h2>
          <p> {props.lastMessageContent} </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Channel
