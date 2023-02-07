import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../asset/logo.png"
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [nav, setNav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={nav ? "navbar activebg" : "navbar"}>
          <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt=''className="navbar-icon"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes style={{color: "#07A53D"}}/> : <FaBars style={{color: "#07A53D"}}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Product"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Token"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Token
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Whitepaper"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Whitepaper
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Technology"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
