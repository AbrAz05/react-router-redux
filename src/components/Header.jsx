import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import usericon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      {/* Siempre usar link enves de a href para evitar el refresh */}
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={usericon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <Link to='/login'>
            Iniciar Sesión
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
