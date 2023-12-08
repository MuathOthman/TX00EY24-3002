import "./Styles/Header.css";
import logo from "./Assets/estatebrew-logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-items">
        <div className="header-item logo">
          <img src={logo} alt="EstateBrewLogo" />
        </div>
        <div className="header-item about-bar">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};
