import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Doctors.css"; // Make sure this path matches your project structure

function DoctorCard({ img, name, title, stars, reviews }) {
  return (
    <div className="dt-card">
      <img src={img} alt={name} className="dt-card-img" />
      <div className="dt-card-info">
        <p className="dt-card-name">{name}</p>
        <p className="dt-card-title">{title}</p>
        <p className="dt-card-stars">
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#F7BB50", marginRight: "6px" }}
          />
          {stars}
          <span className="dt-card-reviews"> ({reviews}+ Reviews)</span>
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;
