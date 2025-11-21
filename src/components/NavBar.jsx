import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";

function NavBar({ carrito }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo Kuvika" />
        </Link>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/rings">Anillos</Link>
        </li>
        <li>
          <Link to="/category/necklaces">Collares</Link>
        </li>
        <li>
          <Link to="/category/bracelets">Pulseras</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <CartWidget carrito={carrito} />
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
