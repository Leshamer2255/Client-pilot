import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>Client Pilot</h1>
      <p>THE ULTIMATE TOOL FOR SUCCESS</p>
      <nav className={styles.navContainer}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/why">Why Client Pilot?</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
