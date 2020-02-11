export default function messageReducer(state, action) {
  let channelIndex
  switch(action.type) {
    case 'GET_CHANNELS':
      return { ...state, channels: action.channels }
    case 'NEW_MESSAGE':
      console.log('A NEW MESSAGE', action)
      if((action.message || {}).channelId) {
        channelIndex = state.channels.findIndex(el => el.id === action.message.channelId)
        state.channels[channelIndex].lastMessageContent = action.message.content
      }
      return { ...state}
    default:
      return state
  }
}
