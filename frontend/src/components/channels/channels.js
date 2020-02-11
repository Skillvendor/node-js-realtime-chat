import React from 'react';
import Channel from './channel'
import { getChannelsRequest } from '../../requests/channels'
import { useStore, useDispatch } from '../../state-management/stores/store'

const Channels = () => {
  const globalStore = useStore()
  const dispatch = useDispatch()

  const channels = (globalStore.channelsStore || {}).channels || []

  React.useEffect(() => {
    console.log('IS THIS USED?!')
    const channelsPromise = getChannelsRequest()
    channelsPromise.then(channels => dispatch({
      type: 'GET_CHANNELS',
      channels,
    }))
  }, [])

  return (
    <React.Fragment>
      <div className='channels'>
        { channels.map((el, index) => <Channel key={`channel_${index}`} {...el}></Channel>)}
      </div>
    </React.Fragment>
  )
}

export default Channels
