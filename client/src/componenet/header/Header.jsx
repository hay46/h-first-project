import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Add this line

  return (
    <div>
      <header className="header">
        <div className="logo">Lodgelink</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a harf="/Home">Home</a>
          <a harf="/about">Rooms</a>
          <a harf="/contact">About</a>
          <a harf="/contact">Gallery</a>
          <a harf="/contact">contact</a>

          <a harf="/WhatsApp" className="whatsApp">
            WhatsApp
          </a>
          <a harf="/Book <br />NOW" className="booknow">
            {" "}
            Book <br /> NOW{" "}
          </a>
        </nav>
      </header>
      <div className="hero-section">
        <br />
        <h1>
          Your Comfort Starts at <br /> LodgeLink desse
          <p>Affordable, Clean, and Peaceful Stay Near Lake Tana.</p>
          <h2>check availability</h2>
        </h1>
        <br />
      </div>
      <div className="hero-page">
        <h1>Why Choose LodgeLink desse?</h1>
        <p>
          At LodgeLink, we blend modern comfort with genuine Ethiopian
          hospitality. Located conveniently near Bahir Dar's vibrant
          attractions, we are committed to making your stay unforgettable,
          whether for business or leisure.
        </p>
      </div>
    </div>
  );
}

export default Header;
