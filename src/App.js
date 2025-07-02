// File: App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import SearchResults from "./Pages/SearchResults";
import Diseases from "./Pages/Diseases";
import DiseaseDetails from "./Pages/DiseaseDetails";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/disease/:name" element={<DiseaseDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
