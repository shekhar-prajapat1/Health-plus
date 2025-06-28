import React from "react";
import yogaImage from "../Assets/yoga.png";
import aayurvadik from "../Assets/aayurvadik.png";
import diet from "../Assets/diet.png";
import guidance from "../Assets/guidance.png";
import InformationCard from "./InformationCard";
import {
  faLeaf,
  faNotesMedical,
  faBowlFood,
  faPersonPraying,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Offer</span>
        </h3>
        <p className="info-description">
          Our holistic health platform is designed to guide you through
          personalized wellness journeys. From disease-specific precautions to
          tailored diet plans, yoga routines, and ayurvedic suggestions — we
          bring natural healing and expert guidance together in one place.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Precaution Guidance"
          description="Get medically-approved precautions and preventive care routines for common and lifestyle diseases to help you stay ahead of illness and live better every day."
          icon={faNotesMedical}
          image={guidance} // ✅ Add image
        />

        <InformationCard
          title="Diet & Nutrition Plans"
          description="Access custom diet charts crafted by certified nutritionists for various health conditions. Balance your meals and fuel your body with what it truly needs."
          icon={faBowlFood}
          image={diet} // ✅ Add image
        />

       <InformationCard
  title="Yoga & Exercise"
  description="Explore guided yoga flows and exercise routines tailored to your needs. Improve flexibility, mental clarity, and physical strength through mindful movement."
  icon={faPersonPraying}
  image={yogaImage} // ✅ Add image
/>

        <InformationCard
          title="Ayurvedic Suggestions"
          description="Receive personalized ayurvedic herbs, remedies, and tips backed by traditional wisdom — integrated for modern, safe, and natural healing."
          icon={faLeaf}
          image={aayurvadik} // ✅ Add image
        />
      </div>
    </div>
  );
}

export default Info;
