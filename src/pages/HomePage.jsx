// src/pages/HomePage.jsx
import React, { useContext, useEffect, useState, useRef } from "react";
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
import { motion } from "framer-motion";
import SplitText from "../components/SplitText.jsx"; // Import the SplitText component

export default function HomePage() {
  const { darkMode } = useContext(DarkModeContext); // Access the darkMode state

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      quote:
        "The team delivered an exceptional product that exceeded our expectations.",
      avatar: "/images/testimonials/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Founder, Creative Studio",
      quote:
        "Their creativity and attention to detail made all the difference.",
      avatar: "/images/testimonials/avatar1.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Manager, InnovateCo",
      quote:
        "Highly professional and easy to work with. Would recommend to anyone!",
      avatar: "/images/testimonials/avatar1.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Manager, InnovateCo",
      quote:
        "Highly professional and easy to work with. Would recommend to anyone!",
      avatar: "/images/testimonials/avatar1.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Manager, InnovateCo",
      quote:
        "Highly professional and easy to work with. Would recommend to anyone!",
      avatar: "/images/testimonials/avatar1.jpg",
    },
  ];

  const sliderRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  // Dynamically calculate drag constraints
  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth; // Width of the visible container
      const cardWidth = 360; // Approximate width of each card
      const gap = 20; // Gap between cards (adjust based on your CSS)
      const totalCards = testimonials.length;

      // Total width of all cards + gaps
      const totalWidth = totalCards * cardWidth + (totalCards - 1) * gap;

      // Maximum scroll distance
      const maxScroll = totalWidth - containerWidth;

      // Set drag constraints
      setDragConstraints({ right: 0, left: -maxScroll });
    }
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* Text Section */}
          <div className={styles.textSection}>
            <SplitText
              text="Welcome to My Portfolio"
              className={`${styles.text80px} font-bold text-left text-light-text leading-none`} // Apply custom font size
              delay={50} // Adjust delay between letters
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p
              className="mt-4 text-lg text-left text-light-text" // Subtitle style
              style={{ opacity: 0.8 }}
            >
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
        <h2 style={{ textAlign: "center", color: darkMode ? "#fff" : "#333" }}>
          Services
        </h2>
        <div className={styles.servicesContainer}>
          {/* UI/UX Design Card */}
          <SpotlightCard>
            <div className={styles.serviceIcon}>🎨</div>
            <h3 style={{ color: darkMode ? "#fff" : "#333", fontSize: "24px" }}>
              UI/UX Design
            </h3>{" "}
            {/* White text */}
            <p style={{ color: darkMode ? "#fff" : "#333", fontSize: "18px" }}>
              {" "}
              {/* White text */}
              Crafting intuitive and user-friendly interfaces for web and mobile
              applications.
            </p>
          </SpotlightCard>

          {/* Branding Card */}
          <SpotlightCard>
            <div className={styles.serviceIcon}>💻</div>
            <h3 style={{ color: darkMode ? "#fff" : "#333", fontSize: "24px" }}>
              Branding
            </h3>{" "}
            {/* White text */}
            <p style={{ color: darkMode ? "#fff" : "#333", fontSize: "18px" }}>
              {" "}
              {/* White text */}
              Creating unique brand identities that resonate with your target
              audience.
            </p>
          </SpotlightCard>

          {/* Graphic Design Card */}
          <SpotlightCard>
            <div className={styles.serviceIcon}>📱</div>
            <h3 style={{ color: darkMode ? "#fff" : "#333", fontSize: "24px" }}>
              Graphic Design
            </h3>{" "}
            {/* White text */}
            <p style={{ color: darkMode ? "#fff" : "#333", fontSize: "18px" }}>
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
              imageSrc="/images/work/work1.jpg"
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
              imageSrc="/images/work/work1.jpg"
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
              imageSrc="/images/work/work1.jpg"
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
              imageSrc="/images/work/work1.jpg"
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
              imageSrc="/images/work/work1.jpg"
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
              imageSrc="/images/work/work1.jpg"
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

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 style={{ textAlign: "center", color: darkMode ? "#fff" : "#333" }}>
          What Clients Say
        </h2>
        <motion.div
          ref={sliderRef}
          className={styles.testimonialsContainer}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={styles.testimonialsSlider}
            drag="x"
            dragConstraints={dragConstraints} // Use dynamic constraints
            initial={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialItem}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className={styles.testimonialAvatar}
                />
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                <p className={styles.testimonialRole}>{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
