import React from 'react'
import './Input.css'
function input() {
  return (
    <div>
      <div class="contact-container">
        <h2>Contact Us</h2>
        <form class="contact-form">
          <div class="form-group">
            <input type="text" id="name" required />
            <label for="name">Your Name</label>
          </div>
          <div class="form-group">
            <input type="email" id="email" required />
            <label for="email">Email Address</label>
          </div>
          <div class="form-group">
            <textarea id="message" rows="5" required></textarea>
            <label for="message">Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default input