import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

// ✅ Import all images
import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
// Add more if needed

// ✅ Create a mapping of image filenames to imports
const imageMap = {
  "p1.png": p1,
  "p2.png": p2,
  "p3.png": p3,
  // Add more mappings if more reviewers are added
};

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  const { name, location, message, image } = customerReviews[review];
  const photo = imageMap[image] || p1; // fallback to p1.png

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{message}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <img src={photo} alt={name} className="rw-reviewer-photo" />

          <div className="rw-names">
            <p className="rw-reviewer-name">{name}</p>
            <p className="rw-reviewer-place">{location}</p>
          </div>

          <div className="rw-btns">
            <button className="rw-next-btn" onClick={backBtnClick}>←</button>
            <button className="rw-next-btn" onClick={frontBtnClick}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
