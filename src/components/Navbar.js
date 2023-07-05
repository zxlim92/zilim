import React from 'react';

const NavBar = () => {
  return (
    <header className="nav_bar">
      <img className="logo" src="img/logo.png" alt="logo" />
      <nav>
        <ul className="nav__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <a className="cta" href="#contact">
        <button>Contact</button>
      </a>
    </header>
  );
};

export default NavBar;
  
