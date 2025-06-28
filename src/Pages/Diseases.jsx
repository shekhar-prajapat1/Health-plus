import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import diseases from "../Components/disease_database.json";
import "../Styles/Diseases.css"; // ensure this is linked

function Diseases() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredDiseases = diseases.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="diseases-container">
      <h1 className="page-title">Explore All Diseases</h1>
      <hr className="title-underline" />
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search for a disease..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="disease-list">
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease, idx) => (
            <div
              key={idx}
              className="disease-card"
              onClick={() => navigate(`/search/${encodeURIComponent(disease.name)}`)}
            >
              {disease.name}
            </div>
          ))
        ) : (
          <p className="no-results">No diseases found.</p>
        )}
      </div>
    </div>
  );
}

export default Diseases;
