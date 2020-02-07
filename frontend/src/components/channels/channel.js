import React from 'react';

const Channel = (props) => {
  return (
    <React.Fragment>
      <div className='channel'>
        <div className='user-image'><img src='http://www.gravatar.com/avatar' /></div>
        <div className='channel-info'>
          <h2> {props.from}</h2>
          <p> {props.text} </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Channel
