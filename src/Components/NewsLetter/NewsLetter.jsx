import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exlusive Deals and Discounts On Your E-mail</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='input'>
        <input type='email' placeholder='Enter your e-mail' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
