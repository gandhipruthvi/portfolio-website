// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterNav from "./components/FooterNav"; // Import the new floating navigation bar
import Preloader from "./components/Preloader";
import "./App.module.scss";

// Lazy load pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const WorkPage = React.lazy(() => import("./pages/WorkPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

export default function App() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        {/* Preloader */}
        <Preloader />

        {/* Main Content */}
        <div className="content">
          {/* Header with Logo and Dark/Light Mode Switch */}
          <Header />

          {/* Page Content */}
          <div style={{ maxWidth: "90%", margin: "0 auto", padding: "20px" }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>

          {/* Floating Navigation Bar */}
          <FooterNav />
        </div>
      </div>
    </Router>
  );
}