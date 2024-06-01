import React from 'react';
import './Header.css';
import logo from '../Header/img/Logo.svg';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="headerLeft">
          <img src={logo} alt="" className='logo'/>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="headerRight">
          <p className='header-p'>Cart(0)</p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Header;
