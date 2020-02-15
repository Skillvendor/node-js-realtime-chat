import React from 'react';
import Member from './member'
import { useStore, useDispatch } from '../../state-management/stores/store'

const Members = () => {
  const { membersStore } = useStore()

  return (
    <React.Fragment>
      <div className='members'>
        { membersStore.members.map((el, index) => <Member key={`member_${index}`} {...el}></Member>)}
      </div>
    </React.Fragment>
  )
}

export default Members
