import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import Theme from "./Theme";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { lightMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hamburger-nemu-container flex">
      <div className="hamburger-menu" ref={menuRef}>
        <div
          className={`hamburger ${menuOpen ? "show" : ""}`}
          onClick={toggleMenu}
        >
          <svg
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="33"
              y2="1"
              stroke={lightMode ? "#6450F0" : "#FF6E4A"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="18"
              x2="38"
              y2="18"
              stroke={lightMode ? "#6450F0" : "#FF6E4A"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="37"
              x2="26"
              y2="37"
              stroke={lightMode ? "#6450F0" : "#FF6E4A"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li className="menu-li">
              <Link className="menu-a" to="/">
                Home
              </Link>
            </li>
            <li className="menu-li">
              <Link className="menu-a" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
