import '../../styles/header.scss';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
 
function Header() {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = location.pathname;
    const menuLinks = document.querySelectorAll("a.header__nav__link");

    menuLinks.forEach((link) => {
      if (link.pathname === currentUrl) {
        link.classList.add("active");
      } else  {
        link.classList.remove("active");
      }
    });
  }, [location]);

    return (
      <header className='header'>
        <h1 className='header__banner'> <img src={logo} alt="Logo" className='header__banner__img'/> </h1>
        <nav className='header__nav'>
            <Link to="/" className='header__nav__link'>Accueil</Link>
            <Link to="/a-propos" className='header__nav__link'>A propos</Link>
          </nav>
      </header>
    )
};

export default Header;



