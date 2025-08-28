// import React from 'react'

// function Footer() {
//   return (
//     <div className="LodgeLink-dessie">
//       {" "}
//       <h1>LodgeLink Dessie</h1>{" "}
//       <p>
//         {" "}
//         Your comfortable and affordable gateway to the beauty of Lake Tana and
//         Ethiopian hospitality.{" "}
//       </p>{" "}
//       <h1>Quick Links</h1> <h4>Home</h4> <h4>About</h4> <h4>Rooms</h4>{" "}
//       <h4>Gallery</h4> <h4>Contact</h4> <h1>Contact Us</h1>{" "}
//       <h4>Phone: +251 946-123-958</h4> <h4>Email: info@lodgelinkdessie.com</h4>{" "}
//       <h4>Address: Near Lake Tana, DESSIE, Ethiopia</h4>{" "}
//       <div className="Connect-With-Us">
//         {" "}
//         <h1>Connect With Us</h1> <h2>Meta</h2> <h2>Insta</h2> <h2>TikTok</h2>{" "}
//       </div>{" "}
//       <hr />{" "}
//       <p>
//         {" "}
//         © 2025 LodgeLink. All rights reserved. Powered by ABRHOTE Software
//         Solutions.{" "}
//       </p>{" "}
//     </div>
//   );
// }

// export default Footer






import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>LodgeLink</h3>
          <p>
            Experience comfort and Ethiopian hospitality with modern rooms,
            delicious cuisine, and breathtaking views of Lake Tana.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <br />
          <Link to="/rooms">Rooms</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Bahir Dar, Ethiopia</p>
          <p>📞 +251 912345678</p>
          <p>✉️ info@lodgelink.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaWhatsapp />
        </a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} LodgeLink | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
