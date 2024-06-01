import React from 'react';
import './Services.css';
import card1 from './img/card1.svg';
import card2 from './img/card2.svg';
import card3 from './img/card3.svg';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="servicesFirst">
          <h1 className='services-h1'>Our Services</h1>
          <button type='submit' className='services-btn'>Explore services</button>
        </div>
        <div className="servicesSecond">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
