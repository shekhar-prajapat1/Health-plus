import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      {/* Left Image */}
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor illustration" className="ba-image1" />
      </div>

      {/* Right Content */}
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Holistic</span>
          <span className="ba-sign">+</span>
        </h3>

        <p className="ba-description">
          At Holistic+, we provide not just medical care but a complete well-being journey.
          With top-rated doctors, fast scheduling, and personalized support, we ensure
          that healthcare is just a click away — anytime, anywhere.
        </p>

        {/* Feature List */}
        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1ECAB0" }} /> Top Certified Experts
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1ECAB0" }} /> Instant Appointment Booking
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1ECAB0" }} /> 24/7 Online Support
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1ECAB0" }} /> Easy & Quick Enrollment
        </p>

        {/* CTA Button */}
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
