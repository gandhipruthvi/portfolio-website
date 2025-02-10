// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.scss';
import Lightswitch from './Lightswitch';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <span className={styles.logo}>✨</span>
        <h1 className={styles.name}>My Portfolio</h1>
      </div>

      {/* Dark/Light Mode Switch */}
      <div className={styles.modeSwitch}>
        <Lightswitch />
      </div>
    </header>
  );
}