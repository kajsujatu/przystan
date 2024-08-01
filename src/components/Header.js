import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);

  const toggleNavbarLinks = () => {
    setNavbarLinksVisible(!navbarLinksVisible);
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.classList.toggle('active');
  };

  return (
    <header className='header'>
      <div className='header-left'>
      <img
          className='logo'
          alt='logo'
          src='/robocza/img/przystan-zmiany-zawodowej-logo.svg'
        ></img>
      </div>
      <nav className={`navbar ${navbarLinksVisible ? 'show' : ''}`}>
        <ul>
          <li>
            <a href='#o-mnie'>O mnie</a>
          </li>
          <li>
            <a href='#opinie'>Opinie</a>
          </li>
          <li>
            <a href='#bezplatna-konsultacja'>Bezpłatna konsultacja</a>
          </li>
          <li>
            <a href='#doswiadczenie'>Doświadczenie</a>
          </li>
          <li>
            <a href='#metodologia'>Metodologia</a>
          </li>
          <li>
            <a href='#kontakt'>Kontakt</a>
          </li>
        </ul>
      </nav>
      <a href='#' className='toggle-button' onClick={toggleNavbarLinks}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
    </header>
  );
}

export default Header;
