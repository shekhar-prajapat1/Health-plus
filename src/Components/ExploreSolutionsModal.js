// File: src/components/ExploreSolutionsModal.js

import React from "react";
import "../Styles/ExploreSolutionsModal.css";

const solutions = [
  {
    title: "Online Consultations",
    description: "Connect with certified doctors in minutes.",
    icon: "🩺",
    link: "/appointment"
  },
  {
    title: "Lab Tests",
    description: "Book home sample collection for lab tests.",
    icon: "🧪",
    link: "/lab-tests"
  },
  {
    title: "Mental Health",
    description: "Talk to a therapist or psychiatrist online.",
    icon: "🧠",
    link: "/mental-health"
  },
  {
    title: "Specialist Doctors",
    description: "Find a specialist for your unique condition.",
    icon: "👩‍⚕️",
    link: "/doctors"
  }
];

function ExploreSolutionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Explore Our Healthcare Solutions</h2>
        <div className="modal-content">
          {solutions.map((sol, index) => (
            <a key={index} href={sol.link} className="solution-card">
              <div className="solution-icon">{sol.icon}</div>
              <h3 className="solution-title">{sol.title}</h3>
              <p className="solution-description">{sol.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreSolutionsModal;
