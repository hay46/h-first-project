import React from "react";
import "./Service.css";

function ServiceCard({ id, para, read }) {
  return (
    <div className="service-card">
      <div className="rating">{id}</div>
      <p className="testimonial-text">“{para}”</p>
      <h4 className="guest-name">{read}</h4>
    </div>
  );
}

export default ServiceCard;
