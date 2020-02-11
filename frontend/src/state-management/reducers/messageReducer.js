export default function messageReducer(state={}, action) {
  let channelId = state.currentChannel

  switch(action.type) {
    case 'GET_MESSAGES':
      state.messages[channelId] = {
        values: [...(state.messages[channelId] || []), ...action.messages],
        requested: true
      }

      return { ...state }
    case 'NEW_MESSAGE':
      state.messages[channelId] = {
        ...state.messages[channelId],
        values: [...(state.messages[channelId].values || []), action.message],
      }

      return { ...state }
    case 'CHANNEL_SELECT':
      console.log('CHANGING CHANNEL', action)
      return { ...state, currentChannel: action.channel.id}
    default:
      return state
  }
}
