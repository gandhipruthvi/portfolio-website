// src/components/FooterNav.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterNav.module.scss';

export default function FooterNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.footerNav} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.pillContainer}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <span className={styles.divider}></span>
        <Link to="/about" className={styles.navLink}>About</Link>
        <span className={styles.divider}></span>
        <Link to="/work" className={styles.navLink}>Work</Link>
        <span className={styles.divider}></span>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
}