import React from 'react'

function Rooms() {
  return (
    <div className="rooms-section">
      <h1>Our Rooms</h1>
      <p>
        Choose from single, double, and family-friendly rooms at great rates.
      </p>
      <div className="rooms-grid">
        <div className="card">Single Room</div>
        <div className="card">Double Room</div>
        <div className="card">Family Suite</div>
      </div>
    </div>
  );
}

export default Rooms