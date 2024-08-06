import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="logo-and-logout-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout-icon"
      />
      <ul className="nav-para-container">
        <li className="nav-para">Home</li>
        <li className="nav-para">Products</li>
        <li className="nav-para">Cart</li>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </ul>
    </div>
    <div className="nav-icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-icon"
      />
    </div>
  </div>
)

export default Header
