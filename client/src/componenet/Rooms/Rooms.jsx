import React from "react";
import "./Rooms.css";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$60 / night",
    img: "https://picsum.photos/400/250?random=1",
    features: ["1 King Bed", "Free Wi-Fi", "Breakfast Included", "City View"],
  },
  {
    id: 2,
    name: "Standard Room",
    price: "$40 / night",
    img: "https://picsum.photos/400/250?random=2",
    features: ["1 Queen Bed", "Free Wi-Fi", "TV & Air Conditioning"],
  },
  {
    id: 3,
    name: "Family Suite",
    price: "$90 / night",
    img: "https://picsum.photos/400/250?random=3",
    features: ["2 Bedrooms", "Kitchenette", "Free Wi-Fi", "Airport Pickup"],
  },
];

function Rooms() {
  return (
    <section className="rooms-section" id="rooms">
      <h2 className="section-title">Our Rooms</h2>
      <p className="section-subtitle">
        Choose the perfect stay for your comfort
      </p>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.img} alt={room.name} className="room-img" />
            <h3>{room.name}</h3>
            <p className="room-price">{room.price}</p>

            <ul className="room-features">
              {room.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>

            <button className="cta-btn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
