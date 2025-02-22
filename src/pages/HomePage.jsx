// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./HomePage.module.scss";
import WAVES from "vanta/dist/vanta.waves.min"; // Import the Waves effect

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: bannerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0074d9, // Adjust color as needed
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up the effect on unmount
    };
  }, [vantaEffect]);

  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section ref={bannerRef} className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerHeading}>
            Elevating Designs in a Digital World
          </h1>
        </div>
      </section>

      {/* Rest of the Page */}
      {/* Add other sections here */}
    </div>
  );
}
