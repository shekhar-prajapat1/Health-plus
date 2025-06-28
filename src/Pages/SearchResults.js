// File: src/Pages/SearchResults.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import diseases from "../Components/disease_database.json"; // ✅ correct path to your data

function SearchResults() {
  const { query } = useParams(); // 🔁 /search/:query
  const navigate = useNavigate();

  const searchTerm = query?.toLowerCase() || "";

  const filteredDiseases = diseases.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const handleClick = (name) => {
    navigate(`/disease/${encodeURIComponent(name)}`);
  };

  return (
    <div style={{ padding: "32px" }}>
      <h2>
        Search Results for: <em>{query}</em>
      </h2>
      {filteredDiseases.length > 0 ? (
        <ul style={{ marginTop: "24px" }}>
          {filteredDiseases.map((d, idx) => (
            <li
              key={idx}
              style={{ cursor: "pointer", marginBottom: "10px", color: "#0077cc" }}
              onClick={() => handleClick(d.name)}
            >
              {d.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
