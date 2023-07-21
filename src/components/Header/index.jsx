import {useEffect} from 'react';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import logo from './logo.png';
 
function Header() {

  function modifySelectline() {
    const home = document.querySelector(".header__nav__home");
    const about = document.querySelector(".header__nav__about");
    
    home.addEventListener('click', function(){
      about.style.textDecoration = "none";
      home.style.textDecoration = "underline";
    });
    
    about.addEventListener('click', function(){
      home.style.textDecoration = "none";
      about.style.textDecoration = "underline";
    })
    }
    
    useEffect(() => {
      modifySelectline();
    }, []); 

    return (
      <header className='header'>
        <h1 className='header__banner'> <img src={logo} alt="Logo" className='header__banner__img'/> </h1>
        <nav className='header__nav'>
            <Link to="/" className='header__nav__home'>Accueil</Link>
            <Link to="/a-propos" className='header__nav__about'>A propos</Link>
        </nav>
      </header>
    )
};

export default Header;



