import React from 'react'

const UserForm = () => {

  return (
    <React.Fragment>
      <div className="user-form">
        <form>
          <div className="form-item">
            <label>Name</label>
            <input type='text' placeholder='Full name' name='name'/>
          </div>

          <div className="form-item">
            <label>Email</label>
            <input type="email" placeholder="Email addresss..." name="email"/>
          </div>

          <div className="form-item">
            <label>Password</label>
            <input type="password" placeholder="Password" name="password"/>
          </div>

          <button className="primary" type="submit">Sign In</button>

          {/* <div className="form-actions">
            {isLogin ? <button onClick={() => {
                this.setState({
                    isLogin: false,
                })

            }} type="button">Create an account?
            </button> : null}

            <button className="primary" type="submit">{isLogin ? 'Sign In' : 'Create new account'}</button>
          </div> */}
        </form>
      </div>
    </React.Fragment>
  );
}

export default UserForm
