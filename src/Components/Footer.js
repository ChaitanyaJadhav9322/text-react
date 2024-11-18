import React from 'react';
import './Footer.css';

const Footer = ({ mode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`container my-2 small ${mode}`}>  
      <div className="footer-content">
        <p>© {currentYear} Textify. All rights reserved.</p>
        <p>Contact: <a href="mailto:cj551634@gmail.com">cj551634@gmail.com</a></p>
        <p>Phone: +1-234-567-8901</p>
      </div>
    </div>
  );
};

export default Footer;
