import React from 'react';
import Channel from './channel'

const Channels = () => {
  const channels = [
    {
      from: 'Lucian, Piscotel',
      text: 'Hello there...'
    }
  ]

  return (
    <React.Fragment>
      <div className='channels'>
        { channels.map((el, index) => <Channel key={`channel_${index}`} {...el}></Channel>)}
      </div>
    </React.Fragment>
  )
}

export default Channels
