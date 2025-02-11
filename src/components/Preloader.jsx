// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.scss";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

    if (hasSeenPreloader) {
      // If already seen, don't show the preloader
      setShowPreloader(false);
    } else {
      // Mark the preloader as seen and hide it after a delay
      sessionStorage.setItem("hasSeenPreloader", "true");

      // Simulate content loading with a delay
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 3000); // Adjust the delay as needed

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, []);

  if (!showPreloader) {
    return null; // Don't render anything if the preloader is hidden
  }

  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}
