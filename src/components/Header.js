import logo from "../assets/img/logo.svg"
import {useState} from "react"
import {Link} from "react-router-dom"

const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {
        (!isLoggedIn) ? (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
        : (<button onClick={() => setIsLoggedIn(false)}>Logout</button>)
      }
    </div>
  );
};

export default Header;
