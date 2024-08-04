import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', showError: true}

  onChangeUsername = event => {
    const userEnteredName = event.target.value
    this.setState({userName: userEnteredName})
  }

  onChangePassword = event => {
    const userEnteredPassword = event.target.value
    this.setState({password: userEnteredPassword})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userObj = {
      userName,
      password,
    }
    console.log(userObj)

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      this.setState({showError: false})
      this.onSuccessLogin()
    } else {
      this.setState({showError: true})
    }
  }

  render() {
    const {showError} = this.state
    return (
      <div className="login-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-website-logo"
        />

        <div className="website-login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <form className="login-form-container" onSubmit={this.onSubmitForm}>
          <div className="login-website-form-logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-website-form-logo"
            />
          </div>
          <label htmlFor="userName" className="login-form-label-ele">
            USERNAME
          </label>
          <input
            onChange={this.onChangeUsername}
            id="userName"
            type="text"
            className="login-form-input-ele"
            placeholder="Username"
          />
          <label htmlFor="passWord" className="login-form-label-ele">
            PASSWORD
          </label>
          <input
            onChange={this.onChangePassword}
            id="passWord"
            type="password"
            className="login-form-input-ele"
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          {showError ? (
            <p className="error-msg">*Username and Password didn't match</p>
          ) : null}
        </form>
      </div>
    )
  }
}
export default LoginForm
