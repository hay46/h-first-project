import React from 'react'
import './Please.css'
function please() {
  return (
    <div class="map-section">
      <h2>Explore Dessie, North Wollo</h2>
      <iframe
        class="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789!2d39.630000!3d11.130000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1643f7b1c9e9e9e9%3A0x123456789abcdef!2sDessie%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1234567890"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="Get-in-Touch">
        <h1>Get in Touch</h1>
        <h3>
          {" "}
          <b>Address :</b> Near Lake Tana, DESSIE, Amhara, Ethiopia
        </h3>
        <h3>
          {" "}
      <b>Phone:</b> +251-946-123-468
        </h3>
        <h3>
          <b>Email: </b> info@lodgelinkDessie.com
        </h3>
      </div>
    </div>
  );
}

export default please
