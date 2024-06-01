import React from 'react';
import './Contact.css';
import contactCall from './img/contact-call.svg';
import Button from '../Button/Button';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="wrapper">
          <div className="contactLeft">
          <h1 className='contact-h1'>Contact Us</h1>
            <p className='contact-p-st'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <img src={contactCall} alt="" className='contact-img'/>
            <h2 className='contact-h2'>Not convinced yet?</h2>
            <p className='contact-p-nd'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button type='submit' className='contact-btn-st'>Browse our packages</button>
          </div>
          <form className='contactRight'>
            <div className="contactRow">
              <div className="row-first">
                <div className="name">
                  <p>Full name</p>
                  <input type="text" placeholder="Full name" />
                </div>
                <div className="address">
                  <p>Address</p>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="request">
                  <p>Requested service</p>
                  <input type="text" placeholder='request' />
                </div>
              </div>
              <div className="row-second">
                <div className="phone">
                  <p>Phone number</p>
                  <input type="text" placeholder="Phone number" />
                </div>
                <div className="email">
                  <p>Email</p>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="day-of-service">
                  <p>Day of service</p>
                  <input type="date"  placeholder=''/>
                </div>
              </div>
            </div>
            <div className="textarea">
              <p>Add a note</p>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div className="contact-btn-nd">
              <Button/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
