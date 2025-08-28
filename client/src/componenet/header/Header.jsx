// import React, { useState } from "react";
// import "./Header.css";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false); // ✅ Add this line

//   return (
//     <div>
//       <header className="header">
//         <div className="logo">Lodgelink</div>
//         <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>
//         <nav className={`nav ${menuOpen ? "open" : ""}`}>
//           <a harf="/Home">Home</a>
//           <a harf="/about">Photo</a>
//           <a harf="/contact">Service</a>
//           <a harf="/contact">Contact</a>
//           <a harf="/contact">Please</a>

//           <a harf="/WhatsApp" className="whatsApp">
//             WhatsApp
//           </a>
//           <a harf="/Book <br />NOW" className="booknow">
//             {" "}
//             Book <br /> NOW{" "}
//           </a>
//         </nav>
//       </header>
//       <div className="hero-section">
//         <br />
//         <h1>
//           Your Comfort Starts at <br /> LodgeLink desse
//           <p>Affordable, Clean, and Peaceful Stay Near Lake Tana.</p>
//           <h2>check availability</h2>
//         </h1>
//         <br />
//       </div>
//       <div className="hero-page">
//         <h1>Why Choose LodgeLink desse?</h1>
//         <p>
//           At LodgeLink, we blend modern comfort with genuine Ethiopian
//           hospitality. Located conveniently near Bahir Dar's vibrant
//           attractions, we are committed to making your stay unforgettable,
//           whether for business or leisure.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Header;






import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // icons for menu

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">LodgeLink</div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="nav-mobile">
          <Link to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
