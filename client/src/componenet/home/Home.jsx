import React from "react";
import "./Home.css"; // styling for this page

function Home({ id, title, para, read }) {
  return (
    <div className="main-content-hero">
      <div className="main-content">
        <section className="hero">
          <h1>Welcome to LodgeLink</h1>
          <p>Affordable, clean, and peaceful stay near Lake Tana.</p>
          <button className="cta-btn">Check Availability</button>
        </section>

        <section>
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="card">✨ Modern Rooms</div>
            <div className="card">🥘 Delicious Food</div>
            <div className="card">📶 Free Wi-Fi</div>
            <div className="card">🚗 Easy Transport</div>
          </div>
        </section>
      </div>
      <div className="home-card">
        <div className="card-icon">{id}</div>
        <h2>{title}</h2>
        <p>{para}</p>
        <a href="/" className="read-more">
          {read} →
        </a>
      </div>
    </div>
  );
}

export default Home;
