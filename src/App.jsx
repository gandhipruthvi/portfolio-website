// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dock from "./blocks/Components/Dock/Dock"; // Import the Dock component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./App.module.scss";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor

// Lazy load pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const WorkPage = React.lazy(() => import("./pages/WorkPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

export default function App() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        {/* Main Content */}
        <div className="content">
          {/* Animated Cursor */}
          <AnimatedCursor
            innerSize={15} // Inner circle size
            outerSize={35} // Outer circle size
            innerScale={1} // Scale factor for the inner circle
            outerScale={2} // Scale factor for the outer circle
            outerAlpha={0} // Fully transparent outer circle
            hasBlendMode={false} // Enable blend mode
            showSystemCursor={false}
            innerStyle={{
              backgroundColor: "var(--text-color)", // Dynamic color for the inner circle
            }}
            outerStyle={{
              border: "3px solid var(--cursor-color)", // Dynamic border color for the outer circle
              mixBlendMode: "exclusion", // Blend mode effect
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          {/* Header with Logo and Dark/Light Mode Switch */}
          <Header />

          {/* Page Content */}
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>

          {/* New Floating Navigation (Dock) */}
          <Dock
            items={[
              {
                icon: <FontAwesomeIcon icon={faHouse} />, // Home icon
                label: "Home",
                onClick: () => (window.location.href = "/"),
              },
              {
                icon: <FontAwesomeIcon icon={faUser} />, // About icon
                label: "About",
                onClick: () => (window.location.href = "/about"),
              },
              {
                icon: <FontAwesomeIcon icon={faBriefcase} />, // Work icon
                label: "Work",
                onClick: () => (window.location.href = "/work"),
              },
              {
                icon: <FontAwesomeIcon icon={faEnvelope} />, // Contact icon
                label: "Contact",
                onClick: () => (window.location.href = "/contact"),
              },
            ]}
          />
        </div>
      </div>
    </Router>
  );
}
