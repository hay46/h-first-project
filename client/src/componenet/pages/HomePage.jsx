import React from "react";
import TestimonialsWrapper from "../components/testimonials/TestimonialsWrapper";
import Rooms from "../components/rooms/Rooms";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import './HomePage.css'
function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to LodgeLink Dessie</h1>
        <p>Affordable, clean, and peaceful stay near Lake Tana.</p>
        <button className="cta-btn">Check Availability</button>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <Home
            id="🛏️"
            title="Modern Rooms"
            para="Relax in clean, spacious, and comfortable rooms."
            read="Read more"
          />
          <Home
            id="🥘"
            title="Authentic Cuisine"
            para="Savor Ethiopian dishes with a modern twist."
            read="Read more"
          />
          <Home
            id="📶"
            title="Free Wi-Fi"
            para="Stay connected with high-speed internet."
            read="Read more"
          />
          <Home
            id="🚗"
            title="Easy Transport"
            para="Enjoy stress-free pickups and city transfers."
            read="Read more"
          />
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialsWrapper />

      {/* Rooms Section */}
      <Rooms />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}

export default HomePage;
