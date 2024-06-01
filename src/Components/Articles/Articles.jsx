import React from 'react';
import './Articles.css';
import Button from '../Button/Button';
import artCard1 from './img/articles-card1.svg';
import artCard2 from './img/articles-card2.svg';

const Articles = () => {
  return (
    <div className='container'>
      <div className="articles">
        <div className="articlesFirst">
          <h1 className='articles-h1'>Articles & Resources</h1>
          <div className="btn-part">
            <Button/>
            <button type='submit' className='articles-btn'>Browse articles</button>
          </div>
        </div>
        <div className="articlesSecond">
          <img src={artCard1} alt="" className='artCard1'/>
          <img src={artCard2} alt="" className='artCard2'/>
        </div>
      </div>
    </div>
  );
};

export default Articles;
