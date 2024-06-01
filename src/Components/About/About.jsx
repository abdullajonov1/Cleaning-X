import React from 'react';
import './About.css';
import frame1 from './img/Frame1.svg';
import frame2 from './img/Frame2.svg';
import frame3 from './img/Frame3.svg';
import Button from '../Button/Button';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="aboutFirst">
          <h1 className='about-h1'>About Us</h1>
          <p className='about-p'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        </div>
        <div className="aboutSecond">
          <img src={frame1} alt="" className='frame1'/>
          <img src={frame2} alt="" className='frame2'/>
          <img src={frame3} alt="" className='frame3'/>
        </div>
        <div className="aboutThird">
          <Button/>
          <button type='submit' className='about-btn'>Explore services</button>
        </div>
      </div>
      
    </div>
  );
};

export default About;
