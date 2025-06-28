// File: Hero.js
import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";
import ExploreSolutionsModal from "./ExploreSolutionsModal";

function Hero() {
  const [goUp, setGoUp] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🌿 Your Natural Health Companion</p>
          <h2 className="text-title">
            Personalized Solutions for a Healthier Life
          </h2>
          <p className="text-description">
            Get trusted information and guidance for common diseases with
            ayurvedic remedies, diet plans, exercise, yoga routines, and a
            smart chatbot for all your health queries — all in one place.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleExploreClick}
          >
            <FontAwesomeIcon icon={faLeaf} /> Explore Solutions
          </button>

          <div className="text-stats">
            <div className="text-stats-container">
              <p>25+</p>
              <p>Diseases Covered</p>
            </div>
            <div className="text-stats-container">
              <p>100+</p>
              <p>Diet & Yoga Plans</p>
            </div>
            <div className="text-stats-container">
              <p>24x7</p>
              <p>Chatbot Support</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img
            className="hero-image1"
            src={Doctor}
            alt="Health & Wellness"
          />
        </div>
      </div>

      {/* Scroll to top button */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>

      {/* Modal */}
      {showModal && <ExploreSolutionsModal onClose={closeModal} />}
    </div>
  );
}

export default Hero;
