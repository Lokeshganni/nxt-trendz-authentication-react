// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  render() {
    return (
      <Link to="/login" className="link-ele">
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
          <form className="login-form-container">
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
              id="userName"
              type="text"
              className="login-form-input-ele"
              placeholder="Username"
            />
            <label htmlFor="passWord" className="login-form-label-ele">
              PASSWORD
            </label>
            <input
              id="passWord"
              type="text"
              className="login-form-input-ele"
              placeholder="Password"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </Link>
    )
  }
}
export default LoginForm
