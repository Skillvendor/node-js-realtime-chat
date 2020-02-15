import React from 'react';
import { useStore } from '../../../state-management/stores/store'
import UserForm from './user-form'

const UserBar = () => {
  const {
    usersStore
  } = useStore()
  const [state, setState] = React.useState({
    showUserForm: false,
  })
  // const currentUser = usersStore.currentUser || {}
  const currentUser = {}

  return (
    <React.Fragment>
      <div className='user-bar'>
      {
        !currentUser.name && <button onClick={() => {
        setState({
            ...state,
            showUserForm: true,
        })
      }} type="button" className="login-btn">Sign In</button> }
        <div className='profile-name'> {currentUser.name} </div>
        <div className='profile-image'><img src='http://www.gravatar.com/avatar' /></div>
        {
          !currentUser.name && state.showUserForm
          && <UserForm onClose={(msg) => {
            setState({
                showUserForm: false,
            })
          }} />
        }
      </div>
    </React.Fragment>
  )
}

export default UserBar
