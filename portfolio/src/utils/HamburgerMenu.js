import React, { useState, useEffect, useRef } from "react";
import menu from '../assets/menu-mobile.png'

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
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
        <img src={menu} alt="menu" />
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li>LoghtMode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;