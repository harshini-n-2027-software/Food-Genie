import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <NavLink to="/" className="navbar-logo">
        <span className="logo-emoji">🍔</span>
        <span className="logo-text">Food Genie</span>
      </NavLink>

      <nav className="navbar-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/top-recipes"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Top Recipes
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;