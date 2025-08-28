import React from "react";
import Slider from "react-slick";
import Service from "./ServiceCard"; // renamed the card file for clarity
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";

function ServiceSection() {
  const testimonials = [
    {
      id: "★★★★☆",
      para: "As a frequent traveler to Dessie, LodgeLink has become my go-to. The quiet ambiance, delicious local food, and convenient airport pickup service make it stand out.",
      read: "- Pro. Elishaday Z.",
    },
    {
      id: "★★★★★",
      para: "LodgeLink Dessie exceeded all my expectations! The rooms were incredibly clean and comfortable, and the staff were exceptionally friendly and helpful.",
      read: "- Dr. Abebe F.",
    },
    {
      id: "★★★★☆",
      para: "Our family had a wonderful time. The service was impeccable, and they went above and beyond to ensure our kids were comfortable.",
      read: "- Mr. Alemayew W.",
    },
    {
      id: "★★★★☆",
      para: "Great value for money! The location is perfect for exploring Bahir Dar, and the free Wi-Fi was a lifesaver.",
      read: "- Pro. Mesfin E.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h1>What Our Guests Say</h1>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <Service key={i} id={t.id} para={t.para} read={t.read} />
        ))}
      </Slider>
    </div>
  );
}

export default ServiceSection;
