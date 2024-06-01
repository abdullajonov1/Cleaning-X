import React from 'react';
import './HeroSection.css';
import heroimg from './img/heroimg.svg';
import Button from '../Button/Button';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="heroLeft">
            <h1 className='hero-h1'>Quality cleaning for your home</h1>
            <p className='hero-p'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <Button />
          </div>
        </div>

      </div>
      <div className="heroRight">
        < img src={heroimg} alt="heroimg" className='heroimg' />
      </div>
    </section>
  );
};

export default HeroSection;
