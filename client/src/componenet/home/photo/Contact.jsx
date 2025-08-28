import React from "react";
import "./Contact.css"; // optional if you want custom styles

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Have questions or want to book your stay? We’d love to hear from you!
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Dessie, Ethiopia – Near Lake Tana</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+251 900 000 000</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>lodgelink@hotel.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="cta-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* Map (optional) */}
      <div className="map-container">
        <iframe
          title="LodgeLink Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.583123..." 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;



