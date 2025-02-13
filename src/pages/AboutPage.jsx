// src/pages/AboutPage.jsx
import React, { useRef } from "react";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.photoContainer}>
          <img
            src="/images/profile.jpg" // Replace with your photo path
            alt="Profile"
            className={styles.profilePhoto}
          />
        </div>
        <div className={styles.introContent}>
          <h1>Hi, I’m Shivani Rotliwala</h1>
          <ScrollText
            lines={[
              "I’m a passionate developer who loves building modern, responsive,",
              "and user-friendly websites.",
              "With a focus on creating seamless digital experiences,",
              "I strive to deliver solutions that not only meet but exceed expectations.",
              "Explore my work and feel free to reach out if you’d like to collaborate.",
            ]}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <h2>My Experience</h2>
        <ScrollText
          lines={[
            "Over the past 4+ years, I’ve worked as a freelance developer,",
            "collaborating with diverse clients to create stunning designs",
            "and functional web applications.",
            "My expertise lies in UI/UX design, branding, and graphic design.",
            "I specialize in crafting intuitive interfaces for web and mobile applications.",
          ]}
        />
      </section>

      {/* Education & Certifications Section */}
      <section className={styles.educationSection}>
        <h2>Education & Certifications</h2>
        <ScrollText
          lines={[
            "I hold a Bachelor’s Degree in Design,",
            "where I focused on visual communication and digital design principles.",
            "To further enhance my skill set, I’ve completed certifications",
            "in UI/UX design and frontend development.",
            "Continuous learning is a priority for me.",
          ]}
        />
      </section>

      {/* Redesigned "Let's Work Together!" Section */}
      <section className={styles.workTogetherSection}>
        <div className={styles.workTogetherContent}>
          <h2>Let's Build Something Amazing Together!</h2>
          <p className={styles.largeText}>
            I’m always open to new opportunities and collaborations. Whether
            you’re looking for a developer, designer, or consultant, I’m here to
            help. Let’s turn your ideas into reality!
          </p>
          <div className={styles.contactOptions}>
            <a href="mailto:your-email@example.com">
              <span>Email Me</span>
            </a>
            <a href="tel:+1234567890">
              <span>Call Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Scroll Text Component
const ScrollText = ({ lines }) => {
  return (
    <div className={styles.scrollTextContainer}>
      {lines.map((line, index) => (
        <ScrollLine key={index} text={line} />
      ))}
    </div>
  );
};

// Scroll Line Component
const ScrollLine = ({ text }) => {
  const ref = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(20px)";
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <p
      ref={ref}
      className={styles.scrollLine}
      style={{
        opacity: "0",
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {text}
    </p>
  );
};
