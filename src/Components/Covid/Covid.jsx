import React from 'react';
import './Covid.css';
import covid from './img/covid.svg';
import Button from '../Button/Button';
import call from './img/covid-call.svg';

const Covid = () => {
  return (
    <section className="container">
      <div className="covid">
        <div className="covidLeft">
          <img src={covid} alt="" />
        </div>
        <div className="covidRight">
          <p className='covid-p-st'>Covid-19 SANITIZATION</p>
          <h1 className='covid-h1'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p className='covid-p-nd'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className="covidBottom">
            <Button/>
            <img src={call} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
