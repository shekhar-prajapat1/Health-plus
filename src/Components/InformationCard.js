// File: src/Components/InformationCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Info.css";

function InformationCard({ icon, title, description, image }) {
  return (
    <div className="info-card">
      {/* Optional top image (e.g., yoga.png) */}
      {image && (
        <img src={image} alt={title} className="info-image" />
      )}

      {/* Circular icon (only visible if no image or used regardless for style) */}
      <div className="info-card-icon">
        <FontAwesomeIcon icon={icon} className="info-fa-icon" />
      </div>

      <h4 className="info-card-title">{title}</h4>
      <p className="info-card-desc">{description}</p>
    </div>
  );
}

export default InformationCard;
