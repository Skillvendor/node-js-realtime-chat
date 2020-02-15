import React from 'react';

const Member = (props) => {
  return (
    <React.Fragment>
      <div className='member'>
        <div className='user-image'><img src='http://www.gravatar.com/avatar' /></div>
          <div className='member-info'>
            <h2> {props.name} </h2>
            <p> Joined: {props.joined}</p>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Member
