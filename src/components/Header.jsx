import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="company logo" />
        <h1>Personal Trainer Mid</h1>
      </div>
      <div>
        <span></span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
