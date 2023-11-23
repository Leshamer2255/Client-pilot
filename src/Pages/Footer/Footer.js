import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer  className={styles.footer}>
      <div className={styles.footerContainer}>
        <div><h2>Client Pilot</h2>
          <p>THE ULTIMATE TOOL FOR SUCCESS</p></div>
        <div>
              <ul>
                <li><a href="#" className={styles.footerLink}>Company</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
        </div>
        <div>
          <ul>
            <li><a href="#" className={styles.footerLink}>Support</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Center</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#" className={styles.footerLink}>Legal</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Law Enforcement</a></li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p>@2023 Client Pilot of Service | Privacy Notice | Site map | Cookie Notice</p>
    </footer>
  );
};

export default Footer;
