import React from 'react';
import HamburgerMenu from "../utils/HamburgerMenu";

import { Link } from "react-router-dom";
import Theme from '../utils/Theme';

function Header() {


  return (
    <header className="header">
      <Link  to={"/"}>
        <p className="logo">acdeguia.</p>
      </Link>
      <ul className="header-li demo-links">
        <li><Link className='demo-link' to="/">HOME</Link></li>
        <li><Link className='demo-link' to="/projects">PROJECTS</Link></li>
      </ul>
      <div className="theme-container"> 
        <Theme />
      </div>
      <HamburgerMenu/>
    </header>
  );
}

export default Header;
