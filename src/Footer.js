import React from 'react';
import { LinkedIn, Email } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Foodeli Section */}
        <div className="footer-section about-foodeli">
          <h2>About Foodeli</h2>
          <p>
            Foodeli is a food ordering application made using Java Springboot and React. <br />
            For any complaints and queries, mail us at <a href="mailto:foodeli.vf@gmail.com">foodeli.vf@gmail.com</a>. <br />
            Happy munching!
          </p>
        </div>

        {/* About Us Section */}
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <ul>
            <li>
              Divyanshu Sachdeva 
              <a href="https://www.linkedin.com/in/divyanshusachdeva01/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="icon" />
              </a>
              <a href="mailto:divyanshu.sachdeva@graymatter.co.in">
                <Email className="icon" />
              </a>
            </li>
            <li>
              Harshit Kumar 
              <a href="https://www.linkedin.com/in/harshit-kumar-20063a190/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="icon" />
              </a>
              <a href="mailto:harshit.kumar@graymatter.co.in">
                <Email className="icon" />
              </a>
            </li>
            <li>
              Suhani Aggarwal 
              <a href="https://www.linkedin.com/in/suhani-aggarwal-58135a231/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="icon" />
              </a>
              <a href="mailto:suhani.aggarwal@graymatter.co.in">
                <Email className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="footer-bottom">
        <p>© 2024 Foodeli Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
