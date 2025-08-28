import React from "react";
import "./Gallery.css";
import gallary5 from "../../assets/gallary5.jpg";
import gallary4 from "../../assets/gallary4.jpg";
import gallary7 from "../../assets/gallary7.jpg";
import exteror from "../../assets/exteror.jpg";
import dining from "../../assets/dining.jpg";
import gallary1 from "../../assets/gallary1.jpg";
function Gallery() {
  return (
    <div>
      <div className="View-All">
        <button>View All Rooms & Book </button>
      </div>
      <div className="View-All-Rooms-Book">
        <div className="A-Glimpse-of-LodgeLink">
          <img src={gallary5} alt="" />
          <img src={gallary4} alt="" />
          <img src={gallary7} alt="" />
        </div>
        <div className="plore-LodgeLink-Book-Your">
          <img src={exteror} alt="" />
          <img src={dining} alt="" />
          <img src={gallary1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
