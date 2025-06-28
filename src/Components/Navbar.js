// File: src/Components/Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LiveChat from "./LiveChat"; // ✅ Import AI Chat Component

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleNav = () => setNav((prev) => !prev);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      setQuery(""); // Optional: clear after search
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Opening Live Chat...", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <>
      <nav className="navbar-section">
        <h1 className="navbar-title">
          <Link to="/">
            Holistic <span className="navbar-sign">+</span>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="navbar-items">
          <li><Link to="/" className="navbar-links">Home</Link></li>
          <li><a href="#services" className="navbar-links">Services</a></li>
          <li><a href="#about" className="navbar-links">About</a></li>
          <li><a href="#reviews" className="navbar-links">Reviews</a></li>
          <li><a href="#doctors" className="navbar-links">Experts</a></li>
          <li><Link to="/diseases" className="navbar-links">Diseases</Link></li>
        </ul>

        {/* 🔍 Search Box */}
        <div className="navbar-search-box">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search diseases..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={handleSearch}
          />
        </div>

        {/* 💬 Live Chat Button */}
        <button
          className="navbar-btn"
          onClick={handleChatBtnClick}
          disabled={isButtonDisabled}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Live Chat
        </button>

        {/* 📱 Mobile Nav Overlay */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div className="mobile-navbar-close" onClick={toggleNav}>
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>
          <ul className="mobile-navbar-links">
            <li><Link onClick={toggleNav} to="/">Home</Link></li>
            <li><a onClick={toggleNav} href="#services">Services</a></li>
            <li><a onClick={toggleNav} href="#about">About</a></li>
            <li><a onClick={toggleNav} href="#reviews">Reviews</a></li>
            <li><a onClick={toggleNav} href="#doctors">Experts</a></li>
            <li><Link onClick={toggleNav} to="/diseases">Diseases</Link></li>
            <li><a onClick={toggleNav} href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ☰ Hamburger Icon */}
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleNav}
            className="hamb-icon"
          />
        </div>
      </nav>

      {/* ✅ AI Live Chat Widget */}
      <LiveChat />
    </>
  );
}

export default Navbar;
