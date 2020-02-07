import React from 'react';
import messageReducer from '../reducers/messageReducer'
import openSocket from 'socket.io-client'

const endpoint = 'http://localhost:5004'
const initialState = { socket: openSocket(endpoint) }
const Store = React.createContext();
const Dispatch = React.createContext();

const combinedReducers = ({ messages, socket }, action) => ({
  messages: messageReducer(messages, action),
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
