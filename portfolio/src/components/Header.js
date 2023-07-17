import React from 'react';
import HamburgerMenu from "../utils/HamburgerMenu";

import { Link, useLocation } from 'react-router-dom';
import Theme from '../utils/Theme';

function Header() {
  const location = useLocation();
  const handleInternalLinkClick = () => {
    window.scrollTo({
      top: 1350,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <p className="logo">acdeguia.</p>
      </Link>
      <ul className="header-li demo-links">
        <li><Link className='demo-link' to="/">HOME</Link></li>
        {/* <li><Link className='demo-link' to="/projects" onMouseDown={handleInternalLinkClick}>PROJECTS</Link></li> */}


        {location.pathname !== '/projects' && (
          <Link to={"/projects"} className="demo-link" onMouseDown={handleInternalLinkClick}>

            PROJECTS

          </Link>
        )}


      </ul>
      <div className="theme-container">
        <Theme />
      </div>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
