import React from 'react';
import Channels from './channels/channels'
import Messages from './main-chat/messages'
import ChatInput from './main-chat/chat-input'
import Members from './room-members/members'
import MainActions from './top-bar/actions'
import Profile from './top-bar/profile'

const Messenger = () => {
  const [state, setState] = React.useState({ height: window.innerHeight })

  React.useLayoutEffect(() => {
    window.addEventListener('resize', setState({...state, height: window.innerHeight}));

    return () => window.removeEventListener('resize', setState({...state, height: window.innerHeight}));
  }, []);

  return (
    <React.Fragment>
      <div style={state} className='app-messenger'>
        <div className='header'>
          <div className='left'>
            <MainActions />
          </div>

          <div className='content'>
            <h2> Title </h2>
          </div>
          <div className='right'>
            <Profile />
          </div>
        </div>

        <div className='main'>
          <div className='sidebar-left'>
            <Channels />
          </div>

          <div className='content'>
            <Messages />
            <ChatInput />
          </div>

          <div className='sidebar-right'>
            <Members />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default Messenger
