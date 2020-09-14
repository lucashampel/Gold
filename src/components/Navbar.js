import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="nav-logo" src={require('./images/gold_logo.png')} alt='Logo'></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link 
            to="/perfil" 
            className="nav-links" 
            onClick={closeMobileMenu}>
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/conexoes"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Conexoes 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/conectar"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Conectar
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
