import React from "react";
import { useParams } from "react-router-dom";
import diseases from "../Components/disease_database.json";
import "../Styles/DiseaseDetails.css";

function DiseaseDetails() {
  const { name } = useParams();
  const disease = diseases.find(
    (d) => d.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  const renderList = (data) => {
    if (Array.isArray(data)) {
      return <ul>{data.map((item, i) => <li key={i}>{item}</li>)}</ul>;
    } else if (typeof data === "object") {
      return Object.entries(data).map(([key, value]) => (
        <div className="treatment-category" key={key}>
          <h4>{key.replace(/_/g, " ").toUpperCase()}</h4>
          <ul>
            {Array.isArray(value) ? value.map((v, i) => <li key={i}>{v}</li>) : <li>{value}</li>}
          </ul>
        </div>
      ));
    } else {
      return <p>{data}</p>;
    }
  };

  if (!disease) {
    return <div className="disease-container"><h2>Disease Not Found</h2></div>;
  }

  return (
    <div className="disease-container">
      <h1 className="disease-title">{disease.name}</h1>

      <section className="disease-section">
        <h3>Symptoms</h3>
        {renderList(disease.symptoms)}
      </section>

      <section className="disease-section">
        <h3>Causes</h3>
        {renderList(disease.causes)}
      </section>

      <section className="disease-section">
        <h3>Feelings</h3>
        <p>{disease.feelings}</p>
      </section>

      <section className="disease-section">
        <h3>Treatments</h3>
        {renderList(disease.treatments)}
      </section>

      <section className="disease-section">
        <h3>Recommended Yoga</h3>
        {renderList(disease.yoga)}
      </section>
    </div>
  );
}

export default DiseaseDetails;
