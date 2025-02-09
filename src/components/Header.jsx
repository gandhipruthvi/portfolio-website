// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Lightswitch from "./Lightswitch";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo & Name */}
      <div className={styles.logoContainer}>
        <span className={styles.logo}>✨</span>
        <h1 className={styles.name}>My Portfolio</h1>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/work" className={styles.navLink}>
              Work
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Lightswitch */}
      <div className={styles.modeSwitch}>
        <Lightswitch />
      </div>
    </header>
  );
}
