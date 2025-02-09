// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.scss"; // Ensure this matches the file name

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.querySelector(".content").classList.add("loaded");
      document
        .querySelector(`.${styles.preloader}`)
        .classList.add(styles.expand);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.rings}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>
    </div>
  );
}
