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
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard"; // Import SpotlightCard
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard"; // Import TiltedCard
import Button from "../components/Button"; // Corrected import path

export default function HomePage() {
  const { darkMode } = useContext(DarkModeContext); // Access the darkMode state

  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* Text Section */}
          <div className={styles.textSection}>
            <h1 style={{ color: darkMode ? "#fff" : "#333" }}>
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
              lineColor={darkMode ? "#fff" : "#0074D9"} // Use blue tint color
              lineWidth="2px"
              lineHeight="20px"
            />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img
            src="/logos/Google.png"
            alt="Logo 1"
            className={styles.logo}
            style={{
              filter: darkMode ? "invert(1)" : "none", // Make logos white in dark mode
            }}
          />
          <img
            src="/logos/Apple.png"
            alt="Logo 2"
            className={styles.logo}
            style={{
              filter: darkMode ? "invert(1)" : "none", // Make logos white in dark mode
            }}
          />
          <img
            src="/logos/Behance.png"
            alt="Logo 3"
            className={styles.logo}
            style={{
              filter: darkMode ? "invert(1)" : "none", // Make logos white in dark mode
            }}
          />
          <img
            src="/logos/Dribbble.png"
            alt="Logo 4"
            className={styles.logo}
            style={{
              filter: darkMode ? "invert(1)" : "none", // Make logos white in dark mode
            }}
          />
          <img
            src="/logos/Awwwards.png"
            alt="Logo 5"
            className={styles.logo}
            style={{
              filter: darkMode ? "invert(1)" : "none", // Make logos white in dark mode
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {/* UI/UX Design Card */}
          <SpotlightCard>
            <FontAwesomeIcon
              icon={faPenRuler}
              style={{
                fontSize: "64px",
                marginBottom: "15px",
                color: "#fff", // Ensure icons are white
              }}
            />
            <h3 style={{ color: "#fff", fontSize: "24px" }}>UI/UX Design</h3>{" "}
            {/* White text */}
            <p style={{ color: "#fff", fontSize: "18px" }}>
              {" "}
              {/* White text */}
              Crafting intuitive and user-friendly interfaces for web and mobile
              applications.
            </p>
          </SpotlightCard>

          {/* Branding Card */}
          <SpotlightCard>
            <FontAwesomeIcon
              icon={faPalette}
              style={{
                fontSize: "64px",
                marginBottom: "15px",
                color: "#fff", // Ensure icons are white
              }}
            />
            <h3 style={{ color: "#fff", fontSize: "24px" }}>Branding</h3>{" "}
            {/* White text */}
            <p style={{ color: "#fff", fontSize: "18px" }}>
              {" "}
              {/* White text */}
              Creating unique brand identities that resonate with your target
              audience.
            </p>
          </SpotlightCard>

          {/* Graphic Design Card */}
          <SpotlightCard>
            <FontAwesomeIcon
              icon={faLayerGroup}
              style={{
                fontSize: "64px",
                marginBottom: "15px",
                color: "#fff", // Ensure icons are white
              }}
            />
            <h3 style={{ color: "#fff", fontSize: "24px" }}>Graphic Design</h3>{" "}
            {/* White text */}
            <p style={{ color: "#fff", fontSize: "18px" }}>
              {" "}
              {/* White text */}
              Designing visually appealing graphics for marketing, social media,
              and print materials.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className={styles.latestWorkSection}>
        <h2 style={{ textAlign: "center", color: darkMode ? "#fff" : "#333" }}>
          Latest Work
        </h2>
        <div className={styles.latestWorkGrid}>
          {/* Row 1 */}
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 1"
              tag="UI/UX Design"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>E-Commerce Platform</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 2"
              tag="Branding"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Corporate Identity</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 3"
              tag="Graphic Design"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Marketing Collateral</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 4"
              tag="Mobile App"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Fitness Tracker</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 5"
              tag="Web Development"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Portfolio Website</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>
          <div className={styles.projectWrapper}>
            <TiltedCard
              imageSrc="/images/work1.jpg"
              altText="Project 6"
              tag="Illustration"
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>Book Cover Art</h3>
              <Button text="View Project →" link="#" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
