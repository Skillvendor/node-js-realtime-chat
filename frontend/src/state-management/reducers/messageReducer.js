export default function messageReducer(state, action) {
  switch(action.type) {
    case 'salutari':
      console.log('HEY')
      console.log(state)
      console.log(action)
      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
