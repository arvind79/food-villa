import logo from "../assets/img/logo.svg";
import {useState} from "react"

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
