import React from 'react';
import './Foter.css';
import foterImg from './img/foter-img.svg';
import foterImg2 from './img/foter-img2.svg';
import foterImg3 from './img/foter-img3.svg';
import Button from '../Button/Button';
import foterLogo from './img/foter-logo.svg';

const Foter = () => {
  return (
    <div className='container'>
      <div className="foter">
        <div className="foter-wrapper">
          <div className="foterLeft">
            <img src={foterImg} alt="" className='foterImg'/>
            <img src={foterImg2} alt="" className='foterImg2'/>
            <img src={foterImg3} alt="" className='foterImg3'/>
          </div>
          <div className="foterRight">
            <h2 className='foter-h2'>Get a free estimate</h2>
            <h1 className='foter-h1'><a href="tel">(414) 567 - 2109</a></h1>
            <p className='foter-p-st'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
            <div className="foter-btn">
              <Button/>
            </div>
          </div>
        </div>
        <div className="foterBottom">
          <img src={foterLogo} alt="" />
          <p className='foter-p-nd'>Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a> - Powered by <a href="#">Webflow</a> <a href="#">Licenses</a></p>
        </div>
      </div>
    </div>
  );
};

export default Foter;
