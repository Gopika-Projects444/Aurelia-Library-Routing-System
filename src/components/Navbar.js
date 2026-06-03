import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Aurelia Library Routing </h2>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;