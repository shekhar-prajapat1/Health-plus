import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Group of Experts" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Holistic<span className="about-sign">+</span></span>
        </h3>

        <p className="about-description">
          Holistic+ is a wellness-first platform crafted to bring you
          personalized and natural healthcare solutions. Our mission is to blend
          traditional wisdom with modern science — helping you stay healthy through
          balanced diet plans, yoga routines, ayurvedic guidance, and expert consultations.
        </p>

        <h4 className="about-text-title">How It Works</h4>

        <SolutionStep
          title="Pick a Wellness Focus"
          description="Select your goal — from weight loss and disease-specific care to stress relief and immunity — we have solutions tailored for all."
        />

        <SolutionStep
          title="Get Personalized Plans"
          description="Access diet charts, yoga routines, and holistic therapies designed just for you by certified wellness experts and ayurvedic practitioners."
        />

        <SolutionStep
          title="Track Progress & Consult"
          description="Stay consistent with your routine, consult experts as needed, and watch your health transform — naturally and sustainably."
        />
      </div>
    </div>
  );
}

export default About;
