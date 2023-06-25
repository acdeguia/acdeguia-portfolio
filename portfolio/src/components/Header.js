function Header() {
  return (
    <header className="header">
      <p className="logo">acdeguia.</p>
      <ul className="header-li">
        <li>HOME</li>
        <li>PROJECTS</li>
      </ul>
      <label className="switch">
        <input type="checkbox" id="dark-light__mode" />
        <span class="slider"></span>
      </label>
    </header>
  );
}

export default Header;
