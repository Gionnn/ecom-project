import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt='' />
        <p>Elixir</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>About</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <img src={facebook_icon} alt='' />
        </div>
        <div className='footer-icons-container'>
          <img src={instagram_icon} alt='' />
        </div>
        <div className='footer-icons-container'>
          <img src={whatsapp_icon} alt='' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2023 - IT School</p>
      </div>
    </div>
  );
};

export default Footer;
