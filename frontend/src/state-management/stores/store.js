import React from 'react';
import messageReducer from '../reducers/messageReducer'
import channelReducer from '../reducers/channelReducer'
import openSocket from 'socket.io-client'

const endpoint = 'http://localhost:5004'
const initialState = {
  socket: openSocket(endpoint),
  messagesStore: {
    messages: {},
    currentChannel: 0
  } }
const Store = React.createContext();
const Dispatch = React.createContext();

const combinedReducers = ({ channelsStore, messagesStore, socket }, action) => ({
  messagesStore: messageReducer(messagesStore, action),
  channelsStore: channelReducer(channelsStore, action),
  socket,
})

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(combinedReducers, initialState)

  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        {children}
      </Dispatch.Provider>
    </Store.Provider>
  )
}

function useStore() {
  const context = React.useContext(Store)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(Dispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { StateProvider, useStore, useDispatch }
