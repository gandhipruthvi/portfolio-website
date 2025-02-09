// src/pages/HomePage.jsx
import React, { useContext } from "react";
import styles from "./HomePage.module.scss";
import MagnetLines from "../blocks/Animations/MagnetLines/MagnetLines";
import { DarkModeContext } from "../context/DarkModeContext"; // Import the context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faPalette,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const { darkMode } = useContext(DarkModeContext); // Access the darkMode state

  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* Text Section */}
          <div className={styles.textSection}>
            <h1 style={{ color: darkMode ? "#ffd700" : "#333" }}>
              Welcome to My Portfolio
            </h1>
            <p style={{ color: darkMode ? "#ffffff" : "#666" }}>
              I’m a passionate developer who loves building modern, responsive,
              and user-friendly websites. Explore my work and feel free to reach
              out!
            </p>
          </div>

          {/* Magnet Lines Animation */}
          <div className={styles.animationSection}>
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="400px"
              lineColor={darkMode ? "#ff5722" : "#2196f3"} // Dynamic color based on darkMode
              lineWidth="2px"
              lineHeight="20px"
            />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img src="/logos/Google.png" alt="Logo 1" className={styles.logo} />
          <img src="/logos/Apple.png" alt="Logo 2" className={styles.logo} />
          <img src="/logos/Behance.png" alt="Logo 3" className={styles.logo} />
          <img src="/logos/Dribbble.png" alt="Logo 4" className={styles.logo} />
          <img src="/logos/Awwwards.png" alt="Logo 5" className={styles.logo} />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>My Services</h2>
        <div className={styles.servicesContainer}>
          {/* UI/UX Design Card */}
          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faPenRuler} className={styles.serviceIcon} />
            <h3>UI/UX Design</h3>
            <p>
              Crafting intuitive and user-friendly interfaces for web and mobile
              applications.
            </p>
          </div>

          {/* Branding Card */}
          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faPalette} className={styles.serviceIcon} />
            <h3>Branding</h3>
            <p>
              Creating unique brand identities that resonate with your target
              audience.
            </p>
          </div>

          {/* Graphic Design Card */}
          <div className={styles.serviceCard}>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className={styles.serviceIcon}
            />
            <h3>Graphic Design</h3>
            <p>
              Designing visually appealing graphics for marketing, social media,
              and print materials.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
