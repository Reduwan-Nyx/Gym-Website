import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
      <footer>
        <div class="footer-content">
          <h3 className="text-center">
            SIGN UP FOR THE{" "}
            <span className="d-block mx-auto text-center text-warning">
              LATEST NEWS AND OFFERS!
            </span>
          </h3>
          <input
            className="d-block mx-auto"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <p className="footer-content text-center">
          <small>Copyright © {year}</small>
        </p>
      </footer>
    );
};

export default Footer;