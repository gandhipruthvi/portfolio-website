// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./HomePage.module.scss";
import WAVES from "vanta/dist/vanta.waves.min"; // Import the Waves effect
import FlowingMenu from "../blocks/Components/FlowingMenu/FlowingMenu"; // Import FlowingMenu

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

  const menuItems = [
    {
      link: "#",
      text: "Engaging designs",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Seamless experience",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Memorable branding",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Refined simplicity",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

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

      {/* Flowing Menu Section */}
      <section className={styles.flowingMenuSection}>
        <FlowingMenu items={menuItems} />
      </section>
    </div>
  );
}
