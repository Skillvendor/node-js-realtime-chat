import React from 'react';
import Member from './member'

const Members = () => {
  const members = [
    {
      name: 'Lucian'
    }
  ]

  return (
    <React.Fragment>
      <div className='members'>
        { members.map((el, index) => <Member key={`member_${index}`} {...el}></Member>)}
      </div>
    </React.Fragment>
  )
}

export default Members
