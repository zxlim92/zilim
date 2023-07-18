import React from 'react';
import "./Navbar.css";
import logo from "../img/logo.png";
const NavBar = (props) => {
  const navigate = (index) => {
    if (props.paraRef && props.paraRef.current) {
      props.paraRef.current.scrollTo(index);
    }
  };

  return (
    <header className="nav_bar">
      <img  className="logo" src={logo} alt="logo" onClick={() => navigate(0)}/>
      <nav>
        <ul className="nav__links">
          <li onClick={() => navigate(0)}><a >Home</a></li>
          <li onClick={() => navigate(1)}><a >About</a></li>
          <li onClick={() => navigate(2)}><a >Experience</a></li>
          <li onClick={() => navigate(4)}><a >Projects</a></li>
        </ul>
      </nav>
      <a className="cta" >
        <button onClick={() => navigate(5)}>Contact</button>
      </a>
    </header>
  );
};

export default NavBar;
