import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Holistic <span className="legal-siteSign">Health</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Holistic Health, your wellness companion designed to guide you
          toward a healthier lifestyle. Our platform provides curated content on disease prevention,
          diet plans, yoga routines, exercise regimens, and Ayurvedic remedies tailored
          to common health conditions. We aim to empower users with accessible,
          natural, and evidence-based health guidance.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy matters to us. We ensure your information is secure and never shared
          without your consent. Any data collected (e.g., preferences, saved routines) is
          used solely to personalize your wellness experience. We don’t track personal
          medical history or provide diagnosis—this app is for informational purposes only.
        </p>

        <p className="legal-title">Terms of Use</p>
        <p className="legal-description">
          By using Holistic Health, you agree to use the content responsibly. The platform
          is not a substitute for professional medical advice, diagnosis, or treatment.
          Users should consult a certified physician for medical concerns. Misuse of the
          app content or bot features may result in restricted access.
        </p>

        <p className="legal-title">Wellness Consultations</p>
        <p className="legal-description">
          Some features in our app allow users to interact with AI-driven guidance or search
          systems for wellness tips. These tools provide curated content, not medical advice.
          Any product suggestions (like Ayurvedic herbs or lifestyle routines) are based on
          traditional practices and should be used at your own discretion.
        </p>

        <p className="legal-title">How It Works</p>
        <p className="legal-description">
          Holistic Health allows users to explore disease categories, read curated
          recommendations (precautions, yoga, diet, herbs), and save routines for
          future reference. Our goal is to make holistic wellness accessible to all.
          For emergency or serious health conditions, please seek immediate care
          from a licensed healthcare provider.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2025 Holistic Health. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
