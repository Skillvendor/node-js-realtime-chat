import React from 'react';
import { useStore } from '../../state-management/stores/store'

const ChatTitle = () => {
  const globalStore = useStore()

  const currentChannel = ((globalStore.channelsStore || {}).channels || []).find( el => el.id === globalStore.messagesStore.currentChannel) || {name: 'Main Chat'}
  return (
    <React.Fragment>
      {/* <div className="toolbar">
        <label>To:</label>
        {
          globalStore.membersStore.members.map((user, key) => {
            return <span key={key}>{user.name}</span>
          })
        }
      </div> */}
      <h2> {currentChannel.name}</h2>
    </React.Fragment>
  )
}

export default ChatTitle
