import React from "react";
import '../../style/LandingPage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Cafe. All Rights Reserved.</p>
      <div>
        <a href="#hero">Home</a> | <a href="#featured">Drinks</a> | <a href="#specials">Specials</a> | <a href="#gallery">Gallery</a>
      </div>
    </footer>
  );
};

export default Footer;
